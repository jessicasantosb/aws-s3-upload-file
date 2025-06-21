"use client";

import { FilePreview } from "@/components/file-preview";
import { Form } from "@/components/form";
import { Button, InputFile, Textarea } from "@/components/ui";
import { PostFormData, postSchema } from "@/schema/post";
import { createPost } from "@/services/create-post";
import { ACCEPTED_TYPES } from "@/utils/fileConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

export function CreatePost() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    mode: "onChange",
  });

  const files = watch("file");
  const file = files[0];

  const onSubmit = async (data: PostFormData) => {
    const file = data.file[0];

    try {
      await createPost(file);
      setFileUrl(null);
    } catch (error) {
      console.error("Erro on submitting post", error);
    }
  };

  useEffect(() => {
    const file = fileUrl && files instanceof FileList ? files[0] : null;
    if (!file || !(file instanceof File)) return;

    const url = URL.createObjectURL(file);
    setFileUrl(url);

    return () => {
      URL.revokeObjectURL(url);
      setFileUrl(null);
    };
  }, [files]);

  return (
    <Form onSubmit={(e) => { void handleSubmit(onSubmit)(e); }}>
      <Textarea {...register("text")} />
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <InputFile
            accept={ACCEPTED_TYPES.join(",")}
            onChange={(e) => { field.onChange(e.target.files); }}
            multiple={false}
            ref={field.ref}
          />
        )}
      />

      {fileUrl && <FilePreview file={file} fileUrl={fileUrl} />}

      <Button type="submit" disabled={isSubmitting} size={"lg"} radius={"sm"}>
        {isSubmitting ? "Postando..." : "Postar"}
      </Button>

      {errors.file && <p className="text-red-500">{errors.file.message}</p>}
    </Form>
  );
}
