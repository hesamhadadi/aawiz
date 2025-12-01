"use client";

import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setThemeState] = useState<"light" | "dark">("light");

    // Read from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initial = saved ?? system;

        setThemeState(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const setTheme = (value: "light" | "dark") => {
        setThemeState(value);
        localStorage.setItem("theme", value);
        document.documentElement.classList.toggle("dark", value === "dark");
    };

    return { theme, setTheme };
}
