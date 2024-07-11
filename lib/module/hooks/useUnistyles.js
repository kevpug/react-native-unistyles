import { NativeEventEmitter, NativeModules } from "react-native";
import { useContext, useEffect, useState } from "react";
import { unistyles } from "../core";
import { UnistylesEventType } from "../common";
import { ThemeContext } from "../context";
const unistylesEvents = new NativeEventEmitter(NativeModules.Unistyles);
export const useUnistyles = () => {
  // const [plugins, setPlugins] = useState(unistyles.runtime.enabledPlugins);
  const theme = useContext(ThemeContext);
  const [contentSizeCategory, setContentSizeCategory] = useState(unistyles.runtime.contentSizeCategory);
  const [layout, setLayout] = useState({
    breakpoint: unistyles.runtime.breakpoint,
    orientation: unistyles.runtime.orientation,
    screen: {
      width: unistyles.runtime.screen.width,
      height: unistyles.runtime.screen.height
    },
    statusBar: {
      width: unistyles.runtime.statusBar.width,
      height: unistyles.runtime.statusBar.height
    },
    navigationBar: {
      width: unistyles.runtime.navigationBar.width,
      height: unistyles.runtime.navigationBar.height
    },
    insets: {
      top: unistyles.runtime.insets.top,
      bottom: unistyles.runtime.insets.bottom,
      left: unistyles.runtime.insets.left,
      right: unistyles.runtime.insets.right
    }
  });
  useEffect(() => {
    const subscription = unistylesEvents.addListener("__unistylesOnChange", event => {
      switch (event.type) {
        case UnistylesEventType.Layout:
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
        // case UnistylesEventType.Plugin: {
        //     return setPlugins(unistyles.runtime.enabledPlugins);
        // }
        case UnistylesEventType.DynamicTypeSize:
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
    // plugins,
    theme,
    layout,
    contentSizeCategory
  };
};
//# sourceMappingURL=useUnistyles.js.map