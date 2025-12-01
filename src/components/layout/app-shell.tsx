"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/form", label: "Form" },
    { href: "/dashboard", label: "Dashboard" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <header className="border-b border-gray-200 dark:border-gray-800">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-md bg-blue-600" />
                        <span className="text-lg font-semibold tracking-tight">Aawiz</span>
                    </div>

                    <nav className="flex items-center gap-4 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-2 py-1 rounded-md transition-colors",
                                    pathname === item.href
                                        ? "bg-gray-100 dark:bg-gray-800 font-medium"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <ThemeToggle />
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

            <footer className="mt-12 border-t border-gray-200 py-6 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
                Built with Love by Hesam Haddadi
            </footer>
        </div>
    );
}
