"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _utils = require("./utils");
var _hooks = require("./hooks");
var _core = require("./core");
var _common = require("./common");
var _context = require("./context");
/**
 * Hook that enables all the features of Unistyles
 * @param stylesheet - The stylesheet with superpowers to be used
 * @param variantsMap - The map of variants to be used
 * @returns - The theme, current breakpoint and RN compatible styles
 */
const useStyles = (stylesheet, variantsMap) => {
  const {
    theme,
    layout,
    plugins
  } = (0, _react.useContext)(_context.UnistylesContext);
  const variants = (0, _hooks.useVariants)(variantsMap);
  const parsedStyles = (0, _react.useMemo)(() => typeof stylesheet === "function" ? stylesheet(theme, _core.unistyles.runtime.miniRuntime) : stylesheet, [theme, stylesheet, layout]);
  const dynamicStyleSheet = (0, _react.useMemo)(() => Object.entries(parsedStyles || {}).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return {
        ...acc,
        [key]: (0, _utils.proxifyFunction)(key, value, variants)
      };
    }
    return _reactNative.StyleSheet.create({
      ...acc,
      [key]: (0, _utils.withPlugins)(key, (0, _utils.parseStyle)(value, variants, !_common.isWeb || !_core.unistyles.registry.config.experimentalCSSMediaQueries))
    });
  }, {}), [parsedStyles, variants, layout, plugins]);
  (0, _hooks.useCSS)(dynamicStyleSheet);
  return {
    theme,
    breakpoint: layout.breakpoint,
    styles: dynamicStyleSheet
  };
};
exports.useStyles = useStyles;
//# sourceMappingURL=useStyles.js.map