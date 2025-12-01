"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Muted } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardClient() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load data.");
                setLoading(false);
            });
    }, []);

    if (loading)
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="space-y-3 p-4 border border-gray-200 dark:border-gray-800 rounded-xl"
                    >
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                ))}
            </div>
        );

    if (error)
        return <Muted className="text-red-500">{error}</Muted>;

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
                <Card key={user.id} className="space-y-1">
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <Muted>{user.email}</Muted>
                    <Muted className="text-xs">{user.company.name}</Muted>
                </Card>
            ))}
        </div>
    );
}
