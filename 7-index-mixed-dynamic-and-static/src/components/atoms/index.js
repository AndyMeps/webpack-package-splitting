import { lazy } from 'react';
import Loading from './Loading';

const LazyTest = import(/* webpackChunkName: "atom.test" */ './Test');

export default {
  LazyTest,
  Loading,
};
