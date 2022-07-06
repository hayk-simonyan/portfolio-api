import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

type FuncGenericReturn = <T>(response: QueryDatabaseResponse) => T[];

export const notionToObjectMapper: FuncGenericReturn = (response) => {
  const objects = [];
  response.results.forEach((result: any) => {
    const object = new Object();
    object['id'] = result.id;
    const properties = result.properties;
    Object.keys(properties).forEach((property: any) => {
      const type = properties[property].type;
      const column = properties[property][type]
        ? properties[property][type][0]
        : null;
      if (type === 'multi_select') {
        object[property] = column?.name;
      } else {
        object[property] = column?.plain_text;
      }
    });
    objects.push(object);
  });
  return objects;
};
