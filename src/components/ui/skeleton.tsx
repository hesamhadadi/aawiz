export function Skeleton({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={
                "animate-pulse rounded-md bg-gray-300 dark:bg-gray-700 " + className
            }
        ></div>
    );
}
