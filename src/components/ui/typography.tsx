"use client";

import { cn } from "@/lib/cn";

export function Title({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                className
            )}
            {...props}
        />
    );
}

export function Subtitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    );
}

export function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "text-xl text-gray-700 dark:text-gray-300",
                className
            )}
            {...props}
        />
    );
}

export function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "text-sm text-gray-500 dark:text-gray-400",
                className
            )}
            {...props}
        />
    );
}

export function Small({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <small
            className={cn("text-sm font-medium leading-none", className)}
            {...props}
        />
    );
}

export function Text({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    );
}

export function Code({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <code
            className={cn(
                "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-gray-800",
                className
            )}
            {...props}
        />
    );
}
