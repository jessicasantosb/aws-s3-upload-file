"use client";

import { FilePreview } from "@/components/file-preview";
import { Form } from "@/components/form";
import { Button } from "@/components/ui";
import { InputFile } from "@/components/ui/input-file";
import { FileFormData, fileSchema } from "@/schema/file";
import { ACCEPTED_TYPES } from "@/utils/fileConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function FilesForm() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const {
    control,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FileFormData>({
    resolver: zodResolver(fileSchema),
    mode: "onChange",
  });

  const files = watch("file");
  const file = files?.[0];

  useEffect(() => {
    const files = watch("file");
    if (!files || !(files instanceof FileList)) return;

    const file = files[0];
    if (!file || !(file instanceof File)) return;

    const url = URL.createObjectURL(file);
    setFileUrl(url);

    return () => {
      URL.revokeObjectURL(url);
      setFileUrl(null);
    };
  }, [watch("file")]);

  const onSubmit = async (data: FileFormData) => {
    console.log("Arquivo:", data.file[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <InputFile
            accept={ACCEPTED_TYPES.join(",")}
            onChange={(e) => field.onChange(e.target.files)}
            ref={field.ref}
          />
        )}
      />

      {fileUrl && file && <FilePreview file={file} fileUrl={fileUrl} />}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Postando..." : "Postar"}
      </Button>

      {errors.file && <p className="text-red-500">{errors.file.message}</p>}
    </Form>
  );
}
