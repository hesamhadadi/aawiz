"use client";

import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border px-4 py-2 rounded-lg"
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
