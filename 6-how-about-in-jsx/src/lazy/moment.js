const getMoment = (callback) => {
  return import(/* webpackChunkName: "moment" */ 'moment');
};

// // With async/await:

//const getMoment = async () => {
//  return await import(/* webpackChunkName: "moment" */ 'moment');
//};


export default getMoment;
