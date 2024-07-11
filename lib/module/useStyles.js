import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { parseStyle, proxifyFunction, withPlugins } from "./utils";
import { useCSS, useUnistyles, useVariants } from "./hooks";
import { unistyles } from "./core";
import { isWeb } from "./common";
/**
 * Hook that enables all the features of Unistyles
 * @param stylesheet - The stylesheet with superpowers to be used
 * @param variantsMap - The map of variants to be used
 * @returns - The theme, current breakpoint and RN compatible styles
 */
export const useStyles = (stylesheet, variantsMap) => {
  const {
    theme,
    layout,
    plugins
  } = useUnistyles();
  const variants = useVariants(variantsMap);
  const parsedStyles = useMemo(() => typeof stylesheet === "function" ? stylesheet(theme, unistyles.runtime.miniRuntime) : stylesheet, [theme, stylesheet, layout]);
  const dynamicStyleSheet = useMemo(() => Object.entries(parsedStyles || {}).reduce((acc, [key, value]) => {
    if (typeof value === "function") {
      return {
        ...acc,
        [key]: proxifyFunction(key, value, variants)
      };
    }
    return StyleSheet.create({
      ...acc,
      [key]: withPlugins(key, parseStyle(value, variants, !isWeb || !unistyles.registry.config.experimentalCSSMediaQueries))
    });
  }, {}), [parsedStyles, variants, layout, plugins]);
  useCSS(dynamicStyleSheet);
  return {
    theme,
    breakpoint: layout.breakpoint,
    styles: dynamicStyleSheet
  };
};
//# sourceMappingURL=useStyles.js.map