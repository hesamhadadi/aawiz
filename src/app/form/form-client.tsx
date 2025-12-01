"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Muted } from "@/components/ui/typography";
import { useState } from "react";

const formSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be under 50 characters"),
    email: z.string().email("Invalid email format"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function FormClient() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormSchema) => {
        console.log("SUBMITTED:", data);

        await new Promise((res) => setTimeout(res, 1000));

        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Card className="max-w-md p-6 space-y-6 border border-neutral-200 dark:border-neutral-800">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Name field */}
                <div className="space-y-1">
                    <Input placeholder="Name" {...register("name")} />
                    {errors.name && (
                        <Muted className="text-red-500 text-sm">
                            {errors.name.message}
                        </Muted>
                    )}
                </div>

                {/* Email field */}
                <div className="space-y-1">
                    <Input placeholder="Email" {...register("email")} />
                    {errors.email && (
                        <Muted className="text-red-500 text-sm">
                            {errors.email.message}
                        </Muted>
                    )}
                </div>

                {/* Submit button */}
                <Button
                    disabled={isSubmitting}
                    className="w-full flex justify-center"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                {/* Success message */}
                {submitted && (
                    <div className="text-green-600 dark:text-green-400 text-center text-sm font-medium">
                        Form submitted successfully!
                    </div>
                )}
            </form>
        </Card>
    );
}
