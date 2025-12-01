"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Muted } from "@/components/ui/typography";

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

    if (loading) return <Muted>Loading...</Muted>;
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
