"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    text: z.string().min(40, "Text must be atleast 40 character"),
});

export function DataForm({
    setResult,
}: {
    setResult: React.Dispatch<
        React.SetStateAction<
            | { summary?: string; sentiment?: string; keywords?: string }
            | undefined
        >
    >;
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    });

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const res = await fetch("/api/analyze", {
            method: "POST",
            body: JSON.stringify({ text: values.text }),
            headers: {
                "Content-type": "application/json",
            },
        });

        const data = await res.json();

        setResult(data.data);
    };
    return (
        <Form {...form}>
            <form
                className="h-[250px] sm:h-full sm:flex-1 flex flex-col w-full sm:w-auto"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem className="h-full sm:h-[60%] flex flex-col gap-1">
                            <FormLabel className="text-lg sm:text-xl font-semibold text-foreground">
                                Write text or upload file to analyse
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    className="transition-all w-full h-full duration-300 ease-in-out"
                                />
                            </FormControl>
                            <FormMessage className="text-xs sm:text-sm text-red-500" />
                        </FormItem>
                    )}
                />

                <Button className="mt-2 w-fit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Upload"}
                </Button>
            </form>
        </Form>
    );
}
