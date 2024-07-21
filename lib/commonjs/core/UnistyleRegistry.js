"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnistyleRegistry = void 0;
var _common = require("../common");
var _plugins = require("../plugins");
class UnistyleRegistry {
  config = {};
  plugins = _common.isWeb ? [_plugins.normalizeWebStylesPlugin] : [];
  themeNames = [];
  themes = {};
  breakpoints = {};
  sortedBreakpointPairs = [];
  constructor(unistylesBridge) {
    this.unistylesBridge = unistylesBridge;
  }
  addThemes = themes => {
    this.themes = themes;
    const keys = Object.keys(themes);
    this.unistylesBridge.themes = keys;
    this.themeNames = keys;
    return {
      addBreakpoints: this.addBreakpoints,
      addConfig: this.addConfig
    };
  };
  addBreakpoints = breakpoints => {
    this.breakpoints = breakpoints;
    this.unistylesBridge.useBreakpoints(breakpoints);
    this.sortedBreakpointPairs = this.unistylesBridge.sortedBreakpointPairs;
    return {
      addThemes: this.addThemes,
      addConfig: this.addConfig
    };
  };
  addConfig = config => {
    this.config = config;
    if (config.adaptiveThemes) {
      this.unistylesBridge.useAdaptiveThemes(config.adaptiveThemes);
    }
    if (config.plugins) {
      config.plugins.forEach(plugin => this.addPlugin(plugin, false));
    }
    if (config.initialTheme) {
      this.unistylesBridge.useTheme(config.initialTheme);
    }
    if (config.experimentalCSSMediaQueries) {
      this.plugins = [_plugins.cssMediaQueriesPlugin].concat(this.plugins);
      this.unistylesBridge.addPlugin(_plugins.cssMediaQueriesPlugin.name, false);
    }
    if (_common.isWeb && config.windowResizeDebounceTimeMs !== undefined) {
      this.unistylesBridge.setWindowResizeDebounceTimeMs(config.windowResizeDebounceTimeMs);
    }
    return {
      addBreakpoints: this.addBreakpoints,
      addThemes: this.addThemes
    };
  };
  getTheme = forName => {
    if (this.themeNames.length === 0) {
      return {};
    }
    if (this.hasTheme(forName)) {
      return this.themes[forName];
    }
    if (this.unistylesBridge.themeName) {
      throw new Error(_common.UnistylesError.ThemeNotFound);
    }
    throw new Error(_common.UnistylesError.ThemeNotSelected);
  };
  addPlugin = (plugin, notify = true) => {
    if (plugin.name.startsWith('__unistyles')) {
      throw new Error(_common.UnistylesError.InvalidPluginName);
    }
    const isAlreadyRegistered = this.plugins.some(({
      name
    }) => name === plugin.name);
    if (!isAlreadyRegistered) {
      this.plugins = [plugin].concat(this.plugins);
      this.unistylesBridge.addPlugin(plugin.name, notify);
      return;
    }
    if (!_common.isDev) {
      throw new Error(_common.UnistylesError.DuplicatePluginName);
    }
  };
  removePlugin = plugin => {
    if (plugin.name.startsWith('__unistyles')) {
      throw new Error(_common.UnistylesError.CantRemoveInternalPlugin);
    }
    this.plugins = this.plugins.filter(({
      name
    }) => name !== plugin.name);
    this.unistylesBridge.removePlugin(plugin.name);
  };
  updateTheme = (name, theme) => {
    this.themes[name] = theme;
    if (this.unistylesBridge.themeName === name) {
      this.unistylesBridge.updateTheme(name);
    }
  };
  hasTheme = name => name in this.themes;
}
exports.UnistyleRegistry = UnistyleRegistry;
//# sourceMappingURL=UnistyleRegistry.js.map