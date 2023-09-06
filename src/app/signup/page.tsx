"use client";
import Input from "@/components/shared/Input/Input";
import { useSignupMutation } from "@/redux/features/signup/signup";
import uploadImage from "@/utils/uploadImage";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";



const schema = yup.object().shape({
  name: yup.string().max(45).required(),
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  // handle sign up
  const SignUpHandler = async (data: any) => {
    console.log(errors)
    const res = await uploadImage(data.picture[0])
    signUp({...data, picture: res?.url! })
    console.log(data.picture[0]);
    //reset();
  };

  return (
    <div className="font-montserrat px-5 md:px-10 py-20 md:py-26 flex h-screen items-center justify-center">
      <div className="rounded-md w-full sm:w-[70%] md:-w-[60%] lg:w-[40%] xl:w-[35%]  p-4 md:p-6 lg:p-8 xl:p-10" style={{
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }}>
        <h3 className="text-white mb-4 text-center text-xl md:text-2xl font-bold"> Sign In </h3>
        {/*  Signin form */}
        <form className='' onSubmit={handleSubmit(SignUpHandler)} >

          <Input data={{ name: "Name", type: 'text', placeholder: `Enter your Full Name`, error: errors.name?.message, hookFormRegister: register("name") }} />
          <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
          <Input data={{ name: "Password", type: 'password', placeholder: `Enter your Password`, error: errors.password?.message, hookFormRegister: register("password") }} />
          <Input data={{ name: "Picture", type: 'file', placeholder: `Upload your picture`, error: errors.picture?.message, hookFormRegister: register("picture") }} />

          <button type="submit" className="px-4 py-2 rounded border-2 border-primary-yellow text-white uppercase"> sign up </button>
        </form>

        {/*  sign up  with other options */}
        <div className="text-center mt-5">
          <p className="text-white mb-3 text-lg"> Or Continue with </p>
          <div className="flex items-center justify-center gap-2">
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
            </svg>
          </div>
          <p className="mt-8 text-white text-base">
            Already have an account ?
            <Link href="/signin" className="font-bold hover:border-b"> Sign In </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage