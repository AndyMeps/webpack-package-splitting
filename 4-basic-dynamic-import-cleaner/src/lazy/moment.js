const getMoment = (callback) => {
  import(/* webpackChunkName: "moment" */ 'moment').then(callback);
};

// // With async/await:

//const getMoment = async (callback) => {
//  const moment = await import(/* webpackChunkName: "moment" */ 'moment');
//  callback(moment);
//};


export default getMoment;
