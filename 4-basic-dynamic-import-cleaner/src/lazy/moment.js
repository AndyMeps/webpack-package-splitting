const getMoment = (callback) => {
  import(/* webpackChunkName: "moment" */ 'moment').then(callback);
};

export default getMoment;
