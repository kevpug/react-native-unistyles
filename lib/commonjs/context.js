"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnistylesProvider = exports.ThemeContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _core = require("./core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ThemeContext = exports.ThemeContext = /*#__PURE__*/_react.default.createContext({});
const UnistylesProvider = ({
  theme,
  children
}) => /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
  value: _core.unistyles.registry.getTheme(theme)
}, children);
exports.UnistylesProvider = UnistylesProvider;
//# sourceMappingURL=context.js.map