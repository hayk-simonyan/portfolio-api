import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

type FuncGenericReturn = <T>(response: QueryDatabaseResponse) => T[];

export const notionToObjectMapper: FuncGenericReturn = (response) => {
  const objects = [];
  response.results.forEach((result: any) => {
    const object = new Object();
    object['id'] = result.id;
    Object.keys(result.properties).forEach((property: any) => {
      const type = result.properties[property].type;
      const column = result.properties[property][type]
        ? result.properties[property][type][0]
        : null;
      const value = column?.plain_text;
      object[property] = value;
    });
    objects.push(object);
  });
  return objects;
};
