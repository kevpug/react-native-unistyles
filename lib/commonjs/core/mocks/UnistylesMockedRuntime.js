"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnistylesMockedRuntime = void 0;
var _common = require("../../common");
// @ts-nocheck

class UnistylesMockedRuntime {
  constructor(unistylesBridge, unistylesRegistry) {
    this.unistylesBridge = unistylesBridge;
    this.unistylesRegistry = unistylesRegistry;
    this.unistylesRegistry = unistylesRegistry;
  }
  get miniRuntime() {
    return {
      contentSizeCategory: this.contentSizeCategory,
      breakpoint: this.breakpoint,
      screen: this.screen,
      insets: this.insets,
      statusBar: {
        width: this.statusBar.width,
        height: this.statusBar.height
      },
      navigationBar: {
        width: this.navigationBar.width,
        height: this.navigationBar.height
      },
      orientation: this.orientation,
      pixelRatio: this.pixelRatio,
      fontScale: this.fontScale
    };
  }
  get colorScheme() {
    return 'dark';
  }
  get hasAdaptiveThemes() {
    return true;
  }
  get themeName() {
    return this.unistylesRegistry.themeNames.length > 0 ? this.unistylesRegistry.themeNames.at(0) : undefined;
  }
  get contentSizeCategory() {
    return 'unspecified';
  }
  get breakpoint() {
    if (this.unistylesRegistry.sortedBreakpointPairs.length === 0) {
      return undefined;
    }
    const firstBreakpoint = this.unistylesRegistry.sortedBreakpointPairs.at(0);
    return firstBreakpoint ? firstBreakpoint.at(0) : undefined;
  }
  get breakpoints() {
    return this.unistylesRegistry.breakpoints;
  }
  get enabledPlugins() {
    return this.unistylesRegistry.plugins;
  }
  get screen() {
    return {
      width: 360,
      height: 800
    };
  }
  get insets() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  get pixelRatio() {
    return 1.0;
  }
  get fontScale() {
    return 1.0;
  }
  get statusBar() {
    return {
      height: 24,
      width: 800,
      setColor: () => {},
      setHidden: () => {}
    };
  }
  get navigationBar() {
    return {
      height: 0,
      width: 0,
      setColor: () => {},
      setHidden: () => {}
    };
  }
  get orientation() {
    return _common.ScreenOrientation.Portrait;
  }
  setTheme = name => true;
  updateTheme = (name, theme) => {};
  setAdaptiveThemes = enabled => {};
  addPlugin = plugin => {};
  removePlugin = plugin => {};
  setRootViewBackgroundColor = color => {};
  setImmersiveMode = isEnabled => {};
}
exports.UnistylesMockedRuntime = UnistylesMockedRuntime;
//# sourceMappingURL=UnistylesMockedRuntime.js.map