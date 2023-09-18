
const uploadImage = async (imageFile: any) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_API_URL!, {
      method: "POST",
      body: formData
    })
    const data = await res.json();
    return data?.url;
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

export default uploadImage;