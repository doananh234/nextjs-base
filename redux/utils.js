import { keyBy, uniq } from 'lodash';

export function convertGetAllData(response, key = 'id') {
  return {
    data: keyBy(response, key),
    ids: uniq(response && response.map(data => data[key])),
  };
}
