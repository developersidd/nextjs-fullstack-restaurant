"use client";
import Input from "@/components/shared/Input/Input";
import { useSignupMutation } from "@/redux/features/signup/signupApi";
import uploadImage from "@/utils/uploadImage";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialMediaAuth from "@/components/SocialMediaAuth/SocialMediaAuth";

const schema = yup.object().shape({
  username: yup.string().max(45).required(),
  email: yup.string().email().required(),
  password: yup.string().min(10).max(30).required(),
  picture: yup.mixed()
    .test('required', "You need to provide an image", (value: any) => {
      return value && value.length
    })
    .test("fileSize", "The file is too large", (value: any, context) => {
      return value && value[0] && value[0].size <= 6 * 1024 * 1024 // accepted file size 6 MB;
    })
    .test("type", "Only the following formats are accepted: .png, .jpeg, .jpg", function (value: any) {
      return value && value[0] && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    }),
});

const SignUpPage = () => {
    const [signUp, { isSuccess, data, isLoading, isError, error }] = useSignupMutation();
  console.log("data:", data)
  
  const [isUploadingImg, setIsUploadingImg] = useState(false);

  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("error:", error)

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signed Up Successfully");
      reset();
      router.push("/");
    }
  }, [isSuccess])

  // handle sign up
  const SignUpHandler = async (data: any) => {
    setIsUploadingImg(true);
    try {
      const url = await uploadImage(data.picture[0]);
      console.log("url:", url)
      await signUp({ ...data, picture: url });
    } catch (error: any) {
      console.log("error:", error)
    } finally {
      setIsUploadingImg(false)
    }
  };


  return (
    <>
    
    <div className="font-montserrat px-5 md:px-10 py-20 md:py-26 flex h-screen items-center justify-center">
      <div className="rounded-md w-full sm:w-[70%] md:-w-[60%] lg:w-[40%] xl:w-[35%]  p-4 md:p-6 lg:p-8 xl:p-10" style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}>
        <h3 className="text-white mb-4 text-center text-xl md:text-2xl font-bold"> Sign In {(isLoading || isUploadingImg) && " ...Loading"} </h3>
        {/*  Signin form */}
        <div className={`${(isLoading || isUploadingImg)  ? "opacity-40 pointer-events-none" : ""}`}>

        <form  onSubmit={handleSubmit(SignUpHandler)} >

          <Input data={{ name: "Name", type: 'text', placeholder: `Enter your Full Name`, error: errors.username?.message, hookFormRegister: register("username") }} />
          <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
          <Input data={{ name: "Password", type: 'password', placeholder: `Enter your Password`, error: errors.password?.message, hookFormRegister: register("password") }} />

          <Input data={{ name: "Picture", type: 'file', placeholder: `Upload your picture`, error: errors.picture?.message, hookFormRegister: register("picture") }} />

          <button disabled={(isLoading || isUploadingImg)} type="submit" className="px-4 py-2 rounded border-2 border-primary-yellow text-white uppercase"> sign up </button>
        </form>

        {/*  sign up  with other options */}
        <div className="text-center mt-5">
          <p className="text-white mb-3 text-lg"> Or Continue with </p>
          <SocialMediaAuth disabled={(isLoading || isUploadingImg)} />
          <p className="mt-8 text-white text-base">
            Already have an account ?
            <Link href="/signin" className="font-bold hover:border-b"> Sign In </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUpPage