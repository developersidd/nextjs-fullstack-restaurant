"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import SocialMediaAuth from "@/components/SocialMediaAuth/SocialMediaAuth";
import Input from "@/components/shared/Input/Input";
import { useSigninMutation } from "@/redux/features/signin/signinApi";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(10).max(30).required(),
});

const SignInPage = () => {
  const [signIn, { isSuccess, data, isLoading, isError, error }] = useSigninMutation();
  console.log("data:", data)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signed In Successfully");
      reset();
      router.push("/");
    }
  }, [isSuccess])


  // handle sign In
  const SignInHandler = (data: any) => {
    signIn(data)
  };

  return (
    <div className="font-montserrat px-5 md:px-10 py-20 md:py-26 flex h-screen items-center justify-center">
      <div className="rounded-md w-full sm:w-[70%] md:-w-[60%] lg:w-[40%] xl:w-[35%]  p-4 md:p-6 lg:p-8 xl:p-10" style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}>
        <h3 className="text-white mb-4 text-center text-xl md:text-2xl font-bold"> {isLoading ? <Image className="flex mx-auto items-center justify-center" src={loadingGear} alt="loading-gear" width={60} height={60} /> : "Sign In"} </h3>
        {/*  Signin form */}
        <div className={`${isLoading ? "opacity-40 pointer-events-none" : ""}`}>

          <form className='' onSubmit={handleSubmit(SignInHandler)} >

            <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
            <Input data={{ name: "Password", type: 'password', placeholder: `Enter your Password`, error: errors.password?.message, hookFormRegister: register("password") }} />
            <small className="-mt-4 mb-5 text-white block">
              Forgot password ?
              <Link href="/reset-password" className="font-bold hover:border-b"> Reset </Link>
            </small>
            <button type="submit" disabled={isLoading} className="px-4 py-2 rounded border-2 border-primary-yellow text-white uppercase"> sign in  </button>
          </form>

          {/*  sign up  with other options */}
          <div className="text-center mt-5">
            <p className="text-white mb-3 text-lg"> Or Continue with </p>
            <SocialMediaAuth disabled={isLoading} />
            <p className="mt-8 text-white text-base">
              Don&apos;t have an account ?
              <Link href="/signup" className="font-bold hover:border-b"> Sign Up </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage