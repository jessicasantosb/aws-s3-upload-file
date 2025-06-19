import Image from "next/image";

type FilePreviewProps = {
  file: File;
  fileUrl: string;
};

export function FilePreview({ file, fileUrl }: FilePreviewProps) {
  if (!file) return null;

  return (
    <div className="mx-auto">
      <div className="relative size-32 rounded overflow-hidden">
        {file.type.startsWith("image/") ? (
          <Image
            alt={file.name}
            src={fileUrl}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 32vw"
          />
        ) : (
          <video
            className="object-cover size-32"
            src={fileUrl}
            autoPlay
            loop
            muted
          />
        )}
      </div>
    </div>
  );
}
