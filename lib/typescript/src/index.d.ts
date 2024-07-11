import { mq } from "./utils";
import { useInitialTheme } from "./hooks";
import type { UnistylesPlugin, UnistylesValues, ExtractVariantNames } from "./types";
import type { UnistylesThemes, UnistylesBreakpoints } from "./global";
import { ScreenOrientation, AndroidContentSizeCategory, IOSContentSizeCategory } from "./common";
import { useStyles } from "./useStyles";
import { createStyleSheet } from "./createStyleSheet";
import { UnistylesProvider } from "./context";
/**
 * Utility to interact with the Unistyles
 * (should be called only once)
 */
declare const UnistylesRegistry: {
    /**
     * Register themes to be used in the app
     * @param themes - Key value pair of themes
     */
    addThemes: (themes: UnistylesThemes) => {
        addBreakpoints: (breakpoints: UnistylesBreakpoints) => {
            addThemes: any;
            addConfig: (config: import("./types").UnistylesConfig) => {
                addBreakpoints: any;
                addThemes: any;
            };
        };
        addConfig: (config: import("./types").UnistylesConfig) => {
            addBreakpoints: (breakpoints: UnistylesBreakpoints) => {
                addThemes: any;
                addConfig: any;
            };
            addThemes: any;
        };
    };
    /**
     * Register breakpoints to be used in the app
     * @param breakpoints - Key value pair of breakpoints
     */
    addBreakpoints: (breakpoints: UnistylesBreakpoints) => {
        addThemes: (themes: UnistylesThemes) => {
            addBreakpoints: any;
            addConfig: (config: import("./types").UnistylesConfig) => {
                addBreakpoints: any;
                addThemes: any;
            };
        };
        addConfig: (config: import("./types").UnistylesConfig) => {
            addBreakpoints: any;
            addThemes: (themes: UnistylesThemes) => {
                addBreakpoints: any;
                addConfig: any;
            };
        };
    };
    /**
     * Register additional config to customize the Unistyles
     * @param config - Key value pair of config
     */
    addConfig: (config: import("./types").UnistylesConfig) => {
        addBreakpoints: (breakpoints: UnistylesBreakpoints) => {
            addThemes: (themes: UnistylesThemes) => {
                addBreakpoints: any;
                addConfig: any;
            };
            addConfig: any;
        };
        addThemes: (themes: UnistylesThemes) => {
            addBreakpoints: (breakpoints: UnistylesBreakpoints) => {
                addThemes: any;
                addConfig: any;
            };
            addConfig: any;
        };
    };
};
declare const UnistylesRuntime: import("./core").UnistylesRuntime;
export { mq, useStyles, useInitialTheme, UnistylesProvider, createStyleSheet, ScreenOrientation, AndroidContentSizeCategory, IOSContentSizeCategory, UnistylesRegistry, UnistylesRuntime, };
export type { UnistylesThemes, UnistylesBreakpoints, UnistylesPlugin, UnistylesValues, ExtractVariantNames as UnistylesVariants, };
//# sourceMappingURL=index.d.ts.map