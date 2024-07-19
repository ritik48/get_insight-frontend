import { z } from "zod";

const formSchema = z.object({
    text: z
        .string()
        .refine((value) => {
            if (!value) return true;
            return value.length >= 20;
        }, "Text should have at least 20 charcters")
        .optional(),
    file_data: z
        .any()
        .refine((files) => {
            if (!files || files.length === 0) return true;
            return files[0].size <= 1024 * 1024;
        }, "File size must be 1mb or less")
        .optional(),
    type_of_data: z.enum(["text", "file"], { message: "Invalid type of data" }),
});

export { formSchema };
