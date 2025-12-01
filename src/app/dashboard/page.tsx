import type { Metadata } from "next";
import DashboardClient from "./dashboard-client";
import { Title } from "@/components/ui/typography";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "A dashboard page that fetches users from a public API.",
};

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <Title>Dashboard</Title>
            <DashboardClient />
        </div>
    );
}
