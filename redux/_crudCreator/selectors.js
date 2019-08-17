import { createSelector } from 'reselect';

const LOADING_ITEMS = [];

export default class CRUDSelectors {
  constructor(resources) {
    this.resources = resources;
  }

  getRestData = (state, resources) =>
    typeof resources === 'string'
      ? state[resources || this.resources]
      : state[this.resources];

  getDataArr = createSelector(
    [this.getRestData],
    resources => {
      const { data, ids, page, loading, numberOfPages } = resources;
      return (!loading && page < numberOfPages) || loading
        ? [...ids.map(id => data[id]), ...LOADING_ITEMS]
        : ids.map(id => data[id]);
    }
  );

  getDataArrWithoutLoadingItem = createSelector(
    [this.getRestData],
    resources => {
      const { data, ids, loading } = resources;
      const storeData = ids.map(id => data[id]);
      const convertData = loading
        ? [...storeData, ...LOADING_ITEMS]
        : storeData;
      return convertData;
    }
  );

  getTotal = createSelector(
    [this.getRestData],
    resources => {
      const { total } = resources;
      return total;
    }
  );

  getCurrentData = createSelector(
    [this.getRestData],
    resources => {
      const { currentId, data } = resources;
      return data[currentId] || {};
    }
  );

  enabledLoadMore = createSelector(
    [this.getRestData],
    resources => {
      const { page, loading, numberOfPages } = resources;
      return !loading && page < numberOfPages;
    }
  );

  getLoading = createSelector(
    [this.getRestData],
    resources => {
      const { loading } = resources;
      return loading;
    }
  );
}
