export const createPost = async (file: File) => {
  try {
    const res = await fetch(`/api/upload-url?fileType=${file.type}`);
    if (!res.ok) {
      throw new Error("Failed to get presigned URL");
    }

    const { url, key } = await res.json();
    console.log("Presigned URL:", url);

    const uploadResponse = await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(
        `S3 upload failed: ${uploadResponse.status} ${uploadResponse.statusText} - ${errorText}`
      );
    }

    console.log("File sent successfully:", key);
    return { key };
  } catch (error) {
    console.error("CREATE_POST_ERROR:", error);
    throw error;
  }
};
