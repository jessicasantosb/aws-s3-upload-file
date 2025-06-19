import { ACCEPTED_TYPES, MAX_FILE_SIZE } from "@/utils/fileConstants";
import { z } from "zod";

export const fileSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File size must be less than 5MB",
    })
    .refine(
      (file) => ACCEPTED_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, .webp, gif, svg and mp4 formats are supported."
    ),
});

export type File = z.infer<typeof fileSchema>;
