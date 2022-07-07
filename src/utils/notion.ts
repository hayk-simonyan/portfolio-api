import {
  GetBlockResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

type FuncGenericReturn = <T>(response: QueryDatabaseResponse) => T[];
type BlockGenericReturn = <B>(response: GetBlockResponse) => B;

export const notionToObjectMapper: FuncGenericReturn = (response) => {
  const objects = [];
  response.results.forEach((result: any) => {
    const object = new Object({ id: result.id });
    const properties = result.properties;
    Object.keys(properties).forEach((property: any) => {
      const type = properties[property].type;
      const column = properties[property][type]
        ? properties[property][type][0]
        : null;

      switch (type) {
        case 'date':
          object[property] = properties[property][type];
          break;
        case 'url':
          object[property] = properties[property][type];
          break;
        case 'multi_select':
          object[property] = column?.name;
          break;
        default:
          object[property] = column?.plain_text;
      }
    });
    objects.push(object);
  });
  return objects;
};

export const notionBlockParser: BlockGenericReturn = (response) =>
  (response as any).paragraph.rich_text[0].text.content;
