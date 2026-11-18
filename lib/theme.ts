export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME = "dark" as const;

export type Theme = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

export const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark" ? stored : "${DEFAULT_THEME}";

    if (stored === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    var root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  } catch (error) {}
})();`;
