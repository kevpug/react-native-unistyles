"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUnistyles = void 0;
var _reactNative = require("react-native");
var _react = require("react");
var _core = require("../core");
var _common = require("../common");
var _context = require("../context");
const unistylesEvents = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.Unistyles);
const useUnistyles = () => {
  const [plugins, setPlugins] = (0, _react.useState)(_core.unistyles.runtime.enabledPlugins);
  const theme = (0, _react.useContext)(_context.ThemeContext);
  const [contentSizeCategory, setContentSizeCategory] = (0, _react.useState)(_core.unistyles.runtime.contentSizeCategory);
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
        case _common.UnistylesEventType.DynamicTypeSize:
          {
            const dynamicTypeSizeEvent = event;
            return setContentSizeCategory(dynamicTypeSizeEvent.payload.contentSizeCategory);
          }
        default:
          return;
      }
    });
    return subscription.remove;
  }, []);
  return {
    plugins,
    theme,
    layout,
    contentSizeCategory
  };
};
exports.useUnistyles = useUnistyles;
//# sourceMappingURL=useUnistyles.js.map