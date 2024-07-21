"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.isWeb = exports.isTest = exports.isServer = exports.isMobile = exports.isIOS = exports.isDev = exports.isAndroid = exports.UnistylesEventType = exports.UnistylesError = exports.ScreenOrientation = exports.IOSContentSizeCategory = exports.AndroidContentSizeCategory = void 0;
var _reactNative = require("react-native");
const warn = message => {
  console.warn(`🦄 [react-native-unistyles]: ${message}`);
};
exports.warn = warn;
const isWeb = exports.isWeb = _reactNative.Platform.OS === 'web';
const isIOS = exports.isIOS = _reactNative.Platform.OS === 'ios';
const isAndroid = exports.isAndroid = _reactNative.Platform.OS === 'android';
const isMobile = exports.isMobile = isIOS || isAndroid;
const isServer = exports.isServer = typeof window === 'undefined';
const isDev = exports.isDev = process.env.NODE_ENV !== 'production';
const isTest = exports.isTest = process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID !== undefined || typeof jest !== 'undefined';
const ScreenOrientation = exports.ScreenOrientation = {
  Landscape: 'landscape',
  Portrait: 'portrait'
};
let IOSContentSizeCategory = exports.IOSContentSizeCategory = /*#__PURE__*/function (IOSContentSizeCategory) {
  IOSContentSizeCategory["AccessibilityExtraExtraExtraLarge"] = "accessibilityExtraExtraExtraLarge";
  IOSContentSizeCategory["AccessibilityExtraExtraLarge"] = "accessibilityExtraExtraLarge";
  IOSContentSizeCategory["AccessibilityExtraLarge"] = "accessibilityExtraLarge";
  IOSContentSizeCategory["AccessibilityLarge"] = "accessibilityLarge";
  IOSContentSizeCategory["AccessibilityMedium"] = "accessibilityMedium";
  IOSContentSizeCategory["ExtraExtraExtraLarge"] = "xxxLarge";
  IOSContentSizeCategory["ExtraExtraLarge"] = "xxLarge";
  IOSContentSizeCategory["ExtraLarge"] = "xLarge";
  IOSContentSizeCategory["Large"] = "Large";
  IOSContentSizeCategory["Medium"] = "Medium";
  IOSContentSizeCategory["Small"] = "Small";
  IOSContentSizeCategory["ExtraSmall"] = "xSmall";
  IOSContentSizeCategory["Unspecified"] = "unspecified";
  return IOSContentSizeCategory;
}({});
let AndroidContentSizeCategory = exports.AndroidContentSizeCategory = /*#__PURE__*/function (AndroidContentSizeCategory) {
  AndroidContentSizeCategory["Small"] = "Small";
  AndroidContentSizeCategory["Default"] = "Default";
  AndroidContentSizeCategory["Large"] = "Large";
  AndroidContentSizeCategory["ExtraLarge"] = "ExtraLarge";
  AndroidContentSizeCategory["Huge"] = "Huge";
  AndroidContentSizeCategory["ExtraHuge"] = "ExtraHuge";
  AndroidContentSizeCategory["ExtraExtraHuge"] = "ExtraExtraHuge";
  return AndroidContentSizeCategory;
}({});
let UnistylesEventType = exports.UnistylesEventType = /*#__PURE__*/function (UnistylesEventType) {
  UnistylesEventType["Theme"] = "theme";
  UnistylesEventType["Layout"] = "layout";
  UnistylesEventType["Plugin"] = "plugin";
  UnistylesEventType["DynamicTypeSize"] = "dynamicTypeSize";
  return UnistylesEventType;
}({});
let UnistylesError = exports.UnistylesError = /*#__PURE__*/function (UnistylesError) {
  UnistylesError["RuntimeUnavailable"] = "Unistyles runtime is not available. Make sure you followed the installation instructions";
  UnistylesError["ThemeNotFound"] = "You are trying to get a theme that is not registered with UnistylesRegistry";
  UnistylesError["ThemeNotRegistered"] = "You are trying to set a theme that was not registered with UnistylesRegistry";
  UnistylesError["ThemeNotSelected"] = "Your themes are registered, but you didn't select the initial theme";
  UnistylesError["ThemesCannotBeEmpty"] = "You are trying to register empty themes object";
  UnistylesError["BreakpointsCannotBeEmpty"] = "You are trying to register empty breakpoints object";
  UnistylesError["BreakpointsMustStartFromZero"] = "You are trying to register breakpoints that don't start from 0";
  UnistylesError["InvalidPluginName"] = "Plugin name can't start from reserved prefix __unistyles";
  UnistylesError["DuplicatePluginName"] = "You are trying to register a plugin with a name that is already registered";
  UnistylesError["CantRemoveInternalPlugin"] = "You are trying to remove an internal unistyles plugin";
  return UnistylesError;
}({});
//# sourceMappingURL=common.js.map