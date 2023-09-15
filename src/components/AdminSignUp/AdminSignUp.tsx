"use client";
import loadingGear from "@/assets/images/loading-gear.gif";
import warning from "@/assets/images/warning.png";
import Input from "@/components/shared/Input/Input";
import { useSignupMutation } from "@/redux/features/signup/signupApi";
import uploadImage from "@/utils/uploadImage";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import * as yup from "yup";

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


const AdminSignUp = () => {
    // rtk sign up Hook
    const [adminsignUp, { isSuccess, data, isLoading, isError, error }] = useSignupMutation();
    //console.log("data:", data)

    // hook form hooks
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const searchParams = useSearchParams();
    const ADMIN_SECRET = searchParams.get(process.env.NEXT_PUBLIC_ASN!) || "";

    const [isUploadingImg, setIsUploadingImg] = useState(false);
    const router = useRouter();
    //console.log("error:", error)

    // handle success 
    useEffect(() => {
        if (isSuccess) {
            toast.success("Signed Up Successfully");
            reset();
            router.push(`/admin/signin?${process.env.NEXT_PUBLIC_ASN!}=${process.env.NEXT_PUBLIC_ADMIN_SECRET}`);
        }
    }, [isSuccess]);

    //  handle error
    useEffect(() => {
        if (isError && error) {
            toast.error((error as any)?.data?.error);
        }
    }, [isError]);


    // handle sign up
    const adminSignUpHandler = async (data: any) => {
        setIsUploadingImg(true);
        try {
            const url = await uploadImage(data.picture[0]);
            await adminsignUp({ ...data, picture: url, isAdmin: true });
        } catch (error: any) {
            toast.error(error?.message);
        } finally {
            setIsUploadingImg(false)
        }
    };

    if (!ADMIN_SECRET || ADMIN_SECRET !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
        return (
            <div className="flex items-center justify-center h-screen flex-col">
                <Image src={warning} className="w-[40%] md:w-[35%] lg:w-[22%] mb-5" alt="smiley-face" />
                <h1 className='text-white font-bold text-xl md:text-3xl xl:text-4xl mb-10'> Your Are Not Allowed To Access this Page <span className="text-red-500">!</span>  </h1>
                <Link href="/" className='px-5 py-2 border-2 border-red-500 text-white font-medium'> Back to Home </Link>
            </div>
        )
    }


    return (
        <>

            <div className="font-montserrat px-5 md:px-10 py-18 md:py-26 flex h-screen items-center justify-center">
                <div className="rounded-md w-full sm:w-[70%] md:-w-[60%] lg:w-[40%] xl:w-[35%]  p-4 md:p-6 lg:p-8 xl:p-10" style={{
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                }}>

                    <div className={`${(isLoading || isUploadingImg) ? "opacity-40 pointer-events-none" : ""} font-helvatica flex items-center justify-center pr-12 -mt-2 md:-mt-6 mb-5`}>
                        <Link href="/">
                            <h1 className="first-letter:text-6xl relative text-white"> S <span className="absolute top-3 text-2xl"> iddik </span>
                                <span className="absolute bottom-2 left-9 text-[9px] text-primary-yellow"> RESTAURANT </span>
                            </h1>
                        </Link>
                    </div>

                    <h3 className="text-white mb-4 text-center text-lg md:text-xl font-bold"> {(isLoading || isUploadingImg) ? <Image className="flex mx-auto items-center justify-center" src={loadingGear} alt="loading-gear" width={60} height={60} /> : "Admin Sign Up"} </h3>
                    {/* Admin  Sign Up form */}
                    <div className={`${(isLoading || isUploadingImg) ? "opacity-40 pointer-events-none" : ""}`}>

                        <form onSubmit={handleSubmit(adminSignUpHandler)} >

                            <Input data={{ name: "Name", type: 'text', placeholder: `Enter your Full Name`, error: errors.username?.message, hookFormRegister: register("username") }} />
                            <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
                            <Input data={{ name: "Password", type: 'password', placeholder: `Enter your Password`, error: errors.password?.message, hookFormRegister: register("password") }} />

                            <Input data={{ name: "Picture", type: 'file', placeholder: `Upload your picture`, error: errors.picture?.message, hookFormRegister: register("picture") }} />

                            <button disabled={(isLoading || isUploadingImg)} type="submit" className="px-4 py-2 rounded border-2 border-primary-yellow text-white uppercase"> sign up </button>
                        </form>
                        {/* bottom section */}
                        <div className="text-center mt-5">
                            <p className="mt-8 text-white text-base">
                                Already have an admin account ?
                                <Link href={`/admin/signin?${process.env.NEXT_PUBLIC_ASN!}=${process.env.NEXT_PUBLIC_ADMIN_SECRET}`} className="font-bold hover:border-b"> Sign In </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSignUp