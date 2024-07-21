import React from "react";
import type { UnistylesBreakpoints } from "./global";
import type { ScreenDimensions, ScreenInsets, ScreenSize, UnistylesTheme } from "./types";
import { type AndroidContentSizeCategory, type IOSContentSizeCategory } from "./common";
export type TUnistylesContext = {
    plugins: string[];
    theme: UnistylesTheme;
    layout: {
        screen: ScreenSize;
        statusBar: ScreenDimensions;
        navigationBar: ScreenDimensions;
        insets: ScreenInsets;
        breakpoint: keyof UnistylesBreakpoints;
        orientation: "landscape" | "portrait";
    };
    contentSizeCategory: IOSContentSizeCategory | AndroidContentSizeCategory;
};
export declare const UnistylesContext: React.Context<TUnistylesContext>;
export declare const UnistylesProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
//# sourceMappingURL=context.d.ts.map