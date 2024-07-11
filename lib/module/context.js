import React from "react";
import { unistyles } from "./core";
export const ThemeContext = /*#__PURE__*/React.createContext({});
export const UnistylesProvider = ({
  theme,
  children
}) => /*#__PURE__*/React.createElement(ThemeContext.Provider, {
  value: unistyles.registry.getTheme(theme)
}, children);
//# sourceMappingURL=context.js.map