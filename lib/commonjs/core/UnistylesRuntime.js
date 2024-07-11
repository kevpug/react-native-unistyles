"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnistylesRuntime = void 0;
var _common = require("../common");
var _utils = require("../utils");
/**
 * Utility to interact with the Unistyles during runtime
 */
class UnistylesRuntime {
  constructor(unistylesBridge, unistylesRegistry) {
    this.unistylesBridge = unistylesBridge;
    this.unistylesRegistry = unistylesRegistry;
  }

  /**
   * Get the mini runtime injected to creteStyleSheet
   * @returns - The mini runtime
   */
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

  /**
   * Get the current color scheme
   * @returns - The current color scheme
   */
  get colorScheme() {
    return this.unistylesBridge.colorScheme;
  }

  /**
   * Get info about adaptive themes
   * @returns - boolean indicating if the adaptive themes are enabled
   */
  get hasAdaptiveThemes() {
    return this.unistylesBridge.hasAdaptiveThemes;
  }

  /**
   * Get the current theme name
   * @returns - The current theme name
   */
  get themeName() {
    return this.unistylesBridge.themeName;
  }

  /**
   * Get the current content size category
   * @returns - The current content size category
   */
  get contentSizeCategory() {
    return this.unistylesBridge.contentSizeCategory;
  }

  /**
   * Get the current breakpoint based on device size
   * @returns - The current breakpoint
   */
  get breakpoint() {
    return this.unistylesBridge.breakpoint;
  }

  /**
   * Get registered breakpoints with UnitylesRegistry
   * @returns - The registered breakpoints
   */
  get breakpoints() {
    return this.unistylesRegistry.breakpoints;
  }

  /**
   * Get the names of currently enabled plugins
   * @returns - The names of currently enabled plugins
   */
  get enabledPlugins() {
    return this.unistylesBridge.enabledPlugins;
  }

  /**
   * Get the screen size
   * @returns - The screen size { width, height }
   */
  get screen() {
    return {
      width: this.unistylesBridge.screenWidth,
      height: this.unistylesBridge.screenHeight
    };
  }

  /**
   * Get the safe area insets
   * @returns - The safe area insets { top, bottom, left, right }
   */
  get insets() {
    return this.unistylesBridge.insets;
  }

  /**
   * Get the status bar info
   * @returns - The status bar api { width, height, setColor, setHidden }
   */
  get statusBar() {
    return {
      width: this.unistylesBridge.statusBar.width,
      height: this.unistylesBridge.statusBar.height,
      setColor: (color, alpha) => {
        const [parsedColor, parsedAlpha] = (0, _utils.parseColor)(color, alpha);
        this.unistylesBridge.statusBar.setColor(parsedColor, parsedAlpha);
      },
      setHidden: hidden => this.unistylesBridge.statusBar.setHidden(hidden)
    };
  }

  /**
   * Get the navigation bar info (Android)
   * @returns - The navigation bar api { width, height, setColor, setHidden }
   */
  get navigationBar() {
    return {
      width: this.unistylesBridge.navigationBar.width,
      height: this.unistylesBridge.navigationBar.height,
      setColor: (color, alpha) => {
        const [parsedColor, parsedAlpha] = (0, _utils.parseColor)(color, alpha);
        this.unistylesBridge.navigationBar.setColor(parsedColor, parsedAlpha);
      },
      setHidden: hidden => this.unistylesBridge.navigationBar.setHidden(hidden)
    };
  }

  /**
   * Get the screen orientation
   * @returns - The screen orientation
   */
  get orientation() {
    const {
      width,
      height
    } = this.screen;
    if (width > height) {
      return _common.ScreenOrientation.Landscape;
    }
    return _common.ScreenOrientation.Portrait;
  }

  /**
   * Get the pixel ratio
   * @returns - The pixel ratio
   */
  get pixelRatio() {
    return this.unistylesBridge.pixelRatio;
  }

  /**
   * Get the font scale
   * @returns - The font scale
   */
  get fontScale() {
    return parseFloat(this.unistylesBridge.fontScale.toFixed(2));
  }

  /**
   * Get the immersive mode (both status bar and navigation bar hidden (Android))
   * @param isEnabled
   */
  setImmersiveMode(isEnabled) {
    return this.unistylesBridge.setImmersiveMode(isEnabled);
  }

  /**
   * Set the root view background color
   * @param color - The color to set
   * @param alpha - Color alpha - default is 1
   */
  setRootViewBackgroundColor = (color, alpha) => {
    const [parsedColor, parsedAlpha] = (0, _utils.parseColor)(color, alpha);
    this.unistylesBridge.setRootViewBackgroundColor(parsedColor, parsedAlpha);
  };

  /**
   * Switch to a different theme
   * @param name - The name of the theme to switch to
   * @returns - boolean indicating if the theme was switched
   */
  setTheme = name => {
    if (name === this.themeName) {
      return;
    }
    if (this.unistylesRegistry.hasTheme(name)) {
      this.unistylesBridge.useTheme(name);
      return true;
    }
    throw new Error(_common.UnistylesError.ThemeNotRegistered);
  };

  /**
   * Update the theme at runtime
   * If current theme is updated, the changes will be applied immediately
   * @param name - The name of the theme to update
   * @param updater - Function that receives the current theme and expect modified theme to be returned
   */
  updateTheme = (name, updater) => {
    this.unistylesRegistry.updateTheme(name, updater(this.unistylesRegistry.getTheme(name)));
  };

  /**
   * Enable or disable adaptive themes
   * @param enable - boolean indicating if adaptive themes should be enabled
   */
  setAdaptiveThemes = enable => {
    this.unistylesBridge.useAdaptiveThemes(enable);
  };

  /**
   * Enable a plugin
   * @param plugin - Plugin that conforms to UnistylesPlugin interface
   */
  addPlugin = plugin => {
    this.unistylesRegistry.addPlugin(plugin);
  };

  /**
   * Disable a plugin
   * @param plugin - Plugin that conforms to UnistylesPlugin interface
   */
  removePlugin = plugin => {
    this.unistylesRegistry.removePlugin(plugin);
  };
}
exports.UnistylesRuntime = UnistylesRuntime;
//# sourceMappingURL=UnistylesRuntime.js.map