import React from "react";
import type { UnistylesThemes } from "./global";
import { unistyles } from "./core";
import type { UnistylesTheme } from "./types";

export const ThemeContext = React.createContext({} as UnistylesTheme);

export const UnistylesProvider = ({ theme, children }: { theme: keyof UnistylesThemes; children: React.ReactNode }) => (
    <ThemeContext.Provider value={unistyles.registry.getTheme(theme)}>{children}</ThemeContext.Provider>
);
