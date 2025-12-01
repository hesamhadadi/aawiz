"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
    "inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
                secondary:
                    "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                outline:
                    "border border-gray-400 text-gray-900 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-800",
            },
            size: {
                sm: "px-3 py-1.5 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-5 py-3 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> { }

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonStyles({ variant, size }), className)}
        />
    );
}
