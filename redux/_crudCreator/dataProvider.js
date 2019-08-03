import { keyBy, uniq } from 'lodash';
// import I18n from 'react-native-i18n';
import { PRIMARY_KEY } from './actions';

export const convertRequestParams = (type, params) => {
  const query = {
    q: '',
    offset: (params.page - 1) * params.limit,
    // all_language: 1,
    // language: options?.setting?.locale
    //   ? options?.setting?.locale.id
    //   : I18n.locale,
    // direction: 'asc',
    ...params,
  };
  delete query.page;
  delete query.pageSize;
  switch (type) {
    case 'GET_ALL':
      return {
        ...query,
      };
    case 'GET_BY_ID':
      break;
    case 'DELETE':
    case 'EDIT':
    case 'CREATE':
    default:
      return {};
  }
  return {};
};

export const convertResponseData = (type, response) => {
  let data = [];
  let total = 0;
  switch (type) {
    case 'GET_ALL':
      if (Array.isArray(response.data)) {
        ({ data } = response);
      } else if (Array.isArray(response)) {
        data = response;
      }
      total = response?.data?.total || data?.length;
      return {
        data: keyBy(data, PRIMARY_KEY),
        ids: uniq(data.map(item => item[PRIMARY_KEY])),
        total,
        // page: response.page,
      };
    case 'GET_BY_ID':
      return { ...response.data };
    case 'EDIT':
    case 'CREATE':
      if (response.code && response.code >= 400) return null;
      // id: response.requestData.item => for _like api
      return response.data
        ? { id: response.data.item, ...response.requestData, ...response.data }
        : { id: response.requestData.item, ...response.requestData };
    case 'DELETE':
    default:
      if (response.code && response.code >= 400) return null;
      return response.requestData;
  }
};
