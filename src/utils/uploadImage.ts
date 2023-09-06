"use client";

const uploadImage = async (imageFile: any) => {
  console.log(process.env.CLOUDINARY_API_URL!)
  console.log("imageFile:", imageFile)
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "next-js-restaurant");
  //formData.append("cloud_name", "absiddik123");


  try {
    const res = await fetch("https://api.cloudinary.com/v1_1/absiddik123/image/upload", {
      method: "POST",
      body: formData
    })

    const data = await res.json();
    console.log("data:", data);
    return data
  } catch (error: any) {
    console.log("error:", error)
  }
}


export default uploadImage