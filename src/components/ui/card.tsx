"use client";

import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-gray-200 bg-white p-4 shadow-sm",
                "dark:border-gray-700 dark:bg-gray-900",
                className
            )}
            {...props}
        />
    );
}
