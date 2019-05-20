import { lazy } from 'react';
import Loading from './Loading';

const LazyTest = import(/* webpackChunkName: "atom.test" */ './Test');
const LazyTestTwo = import(/* webpackChunkName: "atoms.test-two" */ './TestTwo');

export {
  LazyTest,
  LazyTestTwo,
  Loading,
};
