import React from "react";
import type { UnistylesThemes } from "./global";
import { unistyles } from "./core";

export const ThemeContext = React.createContext({} as UnistylesThemes[keyof UnistylesThemes]);

export const UnistylesProvider = ({ theme, children }: { theme: keyof UnistylesThemes; children: React.ReactNode }) => (
    <ThemeContext.Provider value={unistyles.registry.getTheme(theme)}>{children}</ThemeContext.Provider>
);
