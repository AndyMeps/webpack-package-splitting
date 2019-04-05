const getPartition = () => {
  return import(/* webpackChunkName: "lodash.partition" */ 'lodash/partition');
};

export default getPartition;
