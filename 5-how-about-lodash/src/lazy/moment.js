const getMoment = (callback) => {
  return import(/* webpackChunkName: "moment" */ 'moment');
};

export default getMoment;
