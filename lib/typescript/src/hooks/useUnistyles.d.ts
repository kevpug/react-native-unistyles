export declare const useUnistyles: () => {
    theme: never;
    layout: {
        breakpoint: keyof import("..").UnistylesBreakpoints;
        orientation: "landscape" | "portrait";
        screen: {
            width: number;
            height: number;
        };
        statusBar: {
            width: number;
            height: number;
        };
        navigationBar: {
            width: number;
            height: number;
        };
        insets: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
    };
    contentSizeCategory: import("../common").IOSContentSizeCategory | import("../common").AndroidContentSizeCategory;
};
//# sourceMappingURL=useUnistyles.d.ts.map