"use client";

import { cn } from "@/lib/cn";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900",
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700",
                className
            )}
            {...props}
        />
    );
}
