"use client";

import { Form } from "@/components/form";
import { Button, Input } from "@/components/ui";
import { FileFormData, fileSchema } from "@/schema/file";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function FilesForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FileFormData>({ resolver: zodResolver(fileSchema) });

  const onSubmit = async (data: FileFormData) => {
    console.log("Arquivo:", data.file[0]);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="file" {...register("file")} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Postando..." : "Postar"}
      </Button>
      {errors.file && <p className="text-red-500">{errors.file.message}</p>}
    </Form>
  );
}
