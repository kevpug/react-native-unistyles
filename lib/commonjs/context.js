"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnistylesProvider = exports.UnistylesContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("./core");
var _common = require("./common");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const unistylesEvents = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.Unistyles);
const UnistylesContext = exports.UnistylesContext = /*#__PURE__*/_react.default.createContext({
  plugins: [],
  theme: {},
  layout: {
    breakpoint: _core.unistyles.runtime.breakpoint,
    orientation: _core.unistyles.runtime.orientation,
    screen: {
      width: _core.unistyles.runtime.screen.width,
      height: _core.unistyles.runtime.screen.height
    },
    statusBar: {
      width: _core.unistyles.runtime.statusBar.width,
      height: _core.unistyles.runtime.statusBar.height
    },
    navigationBar: {
      width: _core.unistyles.runtime.navigationBar.width,
      height: _core.unistyles.runtime.navigationBar.height
    },
    insets: {
      top: _core.unistyles.runtime.insets.top,
      bottom: _core.unistyles.runtime.insets.bottom,
      left: _core.unistyles.runtime.insets.left,
      right: _core.unistyles.runtime.insets.right
    }
  }
});
const UnistylesProvider = ({
  children
}) => {
  const [theme, setTheme] = (0, _react.useState)(_core.unistyles.registry.getTheme(_core.unistyles.runtime.themeName));
  const [plugins, setPlugins] = (0, _react.useState)(_core.unistyles.runtime.enabledPlugins);
  const [layout, setLayout] = (0, _react.useState)({
    breakpoint: _core.unistyles.runtime.breakpoint,
    orientation: _core.unistyles.runtime.orientation,
    screen: {
      width: _core.unistyles.runtime.screen.width,
      height: _core.unistyles.runtime.screen.height
    },
    statusBar: {
      width: _core.unistyles.runtime.statusBar.width,
      height: _core.unistyles.runtime.statusBar.height
    },
    navigationBar: {
      width: _core.unistyles.runtime.navigationBar.width,
      height: _core.unistyles.runtime.navigationBar.height
    },
    insets: {
      top: _core.unistyles.runtime.insets.top,
      bottom: _core.unistyles.runtime.insets.bottom,
      left: _core.unistyles.runtime.insets.left,
      right: _core.unistyles.runtime.insets.right
    }
  });
  (0, _react.useEffect)(() => {
    const subscription = unistylesEvents.addListener("__unistylesOnChange", event => {
      switch (event.type) {
        case _common.UnistylesEventType.Theme:
          {
            const themeEvent = event;
            return setTheme(_core.unistyles.registry.getTheme(themeEvent.payload.themeName));
          }
        case _common.UnistylesEventType.Layout:
          {
            const layoutEvent = event;
            return setLayout({
              breakpoint: layoutEvent.payload.breakpoint,
              orientation: layoutEvent.payload.orientation,
              screen: layoutEvent.payload.screen,
              statusBar: layoutEvent.payload.statusBar,
              insets: layoutEvent.payload.insets,
              navigationBar: layoutEvent.payload.navigationBar
            });
          }
        case _common.UnistylesEventType.Plugin:
          {
            return setPlugins(_core.unistyles.runtime.enabledPlugins);
          }
        default:
          return;
      }
    });
    return subscription.remove;
  }, []);
  return /*#__PURE__*/_react.default.createElement(UnistylesContext.Provider, {
    value: {
      theme,
      layout,
      plugins
    }
  }, children);
};
exports.UnistylesProvider = UnistylesProvider;
//# sourceMappingURL=context.js.map