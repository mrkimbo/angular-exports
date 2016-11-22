import { injector } from 'angular';

const DEPENDENCIES = [
  '$http', '$q', '$compile', '$parse', '$interpolate',
  '$animate', '$animateCss', '$timeout', '$interval',
  '$log', '$locale', '$cacheFactory', '$window',
  '$document', '$filter'
];

const get = injector(['ng']).get;
const refs = {};

DEPENDENCIES.forEach((dep) => refs[dep] = get(dep));

// ToDo: see about dynamic exports with babel
export const $http = refs.$http;
export const $q = refs.$q;
export const $interval = refs.$interval;
export const $timeout = refs.$timeout;
export const $compile = refs.$compile;
export const $parse = refs.$parse;
export const $interpolate = refs.$interpolate;
export const $animate = refs.$animate;
export const $animateCss = refs.$animateCss;
export const $log = refs.$log;
export const $locale = refs.$locale;
export const $cacheFactory = refs.$cacheFactory;
export const $window = refs.$window;
export const $document = refs.$document;
export const $filter = refs.$filter;
