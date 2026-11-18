"use client";

import * as React from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  type ResolvedTheme,
  type Theme,
} from "@/lib/theme";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);
const listeners = new Set<() => void>();

function normalizeTheme(value: string | null): Theme {
  if (value === "dark" || value === "light" || value === "system") {
    return value;
  }

  return DEFAULT_THEME;
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerSystemTheme(): ResolvedTheme {
  return DEFAULT_THEME;
}

function resolveTheme(theme: Theme, systemTheme: ResolvedTheme): ResolvedTheme {
  return theme === "system" ? systemTheme : theme;
}

function applyThemeToDocument(theme: Theme): void {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const resolved =
    theme === "system" ? (media.matches ? "dark" : "light") : theme;
  const root = document.documentElement;

  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

function getSnapshot(): Theme {
  try {
    return normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return DEFAULT_THEME;
  }
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

function subscribe(callback: () => void) {
  listeners.add(callback);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) {
      applyThemeToDocument(normalizeTheme(event.newValue));
      callback();
    }
  };

  const handleSystemChange = () => {
    applyThemeToDocument(getSnapshot());
    callback();
  };

  window.addEventListener("storage", handleStorage);

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", handleSystemChange);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
    media.removeEventListener("change", handleSystemChange);
  };
}

function setTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}

  applyThemeToDocument(theme);
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const systemTheme = React.useSyncExternalStore(
    subscribe,
    getSystemTheme,
    getServerSystemTheme,
  );
  const resolvedTheme = resolveTheme(theme, systemTheme);

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
