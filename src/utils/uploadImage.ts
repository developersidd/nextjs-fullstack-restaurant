"use client";

console.log(process.env.NEXT_PUBLIC_CLOUDINARY_PROFILE_NAME!)
const uploadImage = async (imageFile: any) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);


  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_PROFILE_NAME!}/image/upload`, {
      method: "POST",
      body: formData
    })
    const data = await res.json();
    console.log("data:", data);
    return data?.url;
  } catch (error: any) {
    console.log("error:", error)
  }
}

export default uploadImage;