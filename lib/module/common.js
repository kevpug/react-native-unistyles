import { Platform } from 'react-native';
export const warn = message => {
  console.warn(`🦄 [react-native-unistyles]: ${message}`);
};
export const isWeb = Platform.OS === 'web';
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isMobile = isIOS || isAndroid;
export const isServer = typeof window === 'undefined';
export const isDev = process.env.NODE_ENV !== 'production';
export const isTest = process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID !== undefined || typeof jest !== 'undefined';
export const ScreenOrientation = {
  Landscape: 'landscape',
  Portrait: 'portrait'
};
export let IOSContentSizeCategory = /*#__PURE__*/function (IOSContentSizeCategory) {
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
export let AndroidContentSizeCategory = /*#__PURE__*/function (AndroidContentSizeCategory) {
  AndroidContentSizeCategory["Small"] = "Small";
  AndroidContentSizeCategory["Default"] = "Default";
  AndroidContentSizeCategory["Large"] = "Large";
  AndroidContentSizeCategory["ExtraLarge"] = "ExtraLarge";
  AndroidContentSizeCategory["Huge"] = "Huge";
  AndroidContentSizeCategory["ExtraHuge"] = "ExtraHuge";
  AndroidContentSizeCategory["ExtraExtraHuge"] = "ExtraExtraHuge";
  return AndroidContentSizeCategory;
}({});
export let UnistylesEventType = /*#__PURE__*/function (UnistylesEventType) {
  UnistylesEventType["Theme"] = "theme";
  UnistylesEventType["Layout"] = "layout";
  UnistylesEventType["Plugin"] = "plugin";
  UnistylesEventType["DynamicTypeSize"] = "dynamicTypeSize";
  return UnistylesEventType;
}({});
export let UnistylesError = /*#__PURE__*/function (UnistylesError) {
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