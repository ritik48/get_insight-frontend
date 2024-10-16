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
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/formSchemaValidation";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export function DataForm({
    setResult,
}: {
    setResult: React.Dispatch<
        React.SetStateAction<
            | { summary?: string; sentiment?: string; keywords?: string[] }
            | undefined
        >
    >;
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type_of_data: "text",
        },
    });

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const formData = new FormData();

        formData.append("text", values.text || "");
        formData.append("type_of_data", values.type_of_data);

        if (values.file_data && values.file_data.length > 0) {
            formData.append("file_data", values.file_data[0]);
        }
        const res = await fetch("/api/analyze", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!data.success) {
            toast.error(data.message || "Something went wrong");
        } else {
            setResult({ ...data.data, keywords: data.keywords });
            form.reset({ type_of_data: values.type_of_data });
        }
    };
    const fileRef = form.register("file_data");
    return (
        <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="type_of_data"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex space-x-3"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="text" />
                                        </FormControl>
                                        <FormLabel className="text-foreground">
                                            Text
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="file" />
                                        </FormControl>
                                        <FormLabel className="text-foreground">
                                            File
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                        </FormItem>
                    )}
                />

                {form.watch("type_of_data") === "file" ? (
                    <FormField
                        control={form.control}
                        name="file_data"
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormControl>
                                    <Input type="file" {...fileRef} />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm text-red-500" />
                            </FormItem>
                        )}
                    />
                ) : (
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-1 mt-5">
                                <FormLabel className="text-sm sm:text-xl font-semibold text-foreground">
                                    Write text or upload file to analyse
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        className="transition-all w-full h-[200px] duration-300 ease-in-out"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs sm:text-sm text-red-500" />
                            </FormItem>
                        )}
                    />
                )}
                <Button className="w-fit mt-2" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Upload"}
                </Button>
            </form>
        </Form>
    );
}
