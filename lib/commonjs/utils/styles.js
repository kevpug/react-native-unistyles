"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.proxifyFunction = exports.parseStyle = exports.isPlatformColor = void 0;
var _breakpoints = require("./breakpoints");
var _common = require("../common");
var _withPlugins = require("./withPlugins");
const proxifyFunction = (key, fn, variant) => new Proxy(fn, {
  apply: (target, thisArg, argumentsList) => (0, _withPlugins.withPlugins)(key, parseStyle(target.apply(thisArg, argumentsList), variant))
});
exports.proxifyFunction = proxifyFunction;
const isPlatformColor = value => {
  if (_common.isIOS) {
    return 'semantic' in value && typeof value.semantic === 'object';
  }
  return _common.isAndroid && 'resource_paths' in value && typeof value.resource_paths === 'object';
};
exports.isPlatformColor = isPlatformColor;
const parseStyle = (style, variant = {}, parseMediaQueries = true) => Object.entries(style || {}).reduce((acc, [key, value]) => {
  // nested objects
  if (key === 'shadowOffset' || key === 'textShadowOffset') {
    acc[key] = parseStyle(value, variant);
    return acc;
  }

  // transforms
  if (key === 'transform' && Array.isArray(value)) {
    acc[key] = value.map(value => parseStyle(value, variant));
    return acc;
  }
  if (key === 'fontVariant' && Array.isArray(value)) {
    acc[key] = value;
    return acc;
  }

  // values or platform colors
  if (typeof value !== 'object' || isPlatformColor(value)) {
    acc[key] = value;
    return acc;
  }
  if (key === 'variants') {
    return {
      ...acc,
      ...Object.keys(value).reduce((acc, key) => ({
        ...acc,
        // this will parse the styles of the selected variant (or default if it is undefined), if selected variant has no styles then it will fallback to default styles
        ...parseStyle(value[key][variant[key]?.toString() || 'default'] ?? value[key].default ?? {})
      }), {})
    };
  }

  // don't parse media queries and breakpoints
  if (!parseMediaQueries) {
    return {
      ...acc,
      [key]: value
    };
  }
  return {
    ...acc,
    [key]: (0, _breakpoints.getValueForBreakpoint)(value)
  };
}, {});
exports.parseStyle = parseStyle;
//# sourceMappingURL=styles.js.map