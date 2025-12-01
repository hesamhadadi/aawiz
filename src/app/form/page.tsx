import type { Metadata } from "next";
import { Title } from "@/components/ui/typography";
import FormClient from "./form-client";

export const metadata: Metadata = {
    title: "Form",
    description: "Aawiz demo form using React Hook Form + Zod validation."
};

export default function FormPage() {
    return (
        <div className="space-y-6">
            <Title>Form</Title>
            <FormClient />
        </div>
    );
}
