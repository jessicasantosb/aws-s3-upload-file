import { z } from "zod";

import { ACCEPTED_TYPES, MAX_FILE_SIZE } from "@/utils/fileConstants";

export const postSchema = z.object({
  text: z
    .string()
    .max(255, { message: "O texto deve ter no máximo 255 caracteres" }),
  file: z
    .custom<FileList>((value) => value instanceof FileList, {
      message: "Envie um arquivo válido",
    })
    .refine((files) => files.length > 0, {
      message: "Selecione um arquivo",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: "Arquivo muito grande",
    })
    .refine((files) => ACCEPTED_TYPES.includes(files[0].type), {
      message: "Tipo de arquivo inválido",
    }),
});

export type PostFormData = z.infer<typeof postSchema>;
