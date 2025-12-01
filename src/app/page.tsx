import Link from "next/link";
import { Title, Lead, Muted } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description:
    "Aawiz demo featuring reusable UI components, a validated form, and an API-powered dashboard.",
};
export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Title>Aawiz</Title>
        <Lead>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Lead>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3">
          <h2 className="text-lg font-semibold pb-2">Form with validation</h2>

          <Link href="/form">
            <Button>Go to form</Button>
          </Link>
        </Card>

        <Card className="space-y-3">
          <h2 className="text-lg font-semibold pb-2">Dashboard</h2>

          <Link href="/dashboard">
            <Button variant="secondary">View dashboard</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
