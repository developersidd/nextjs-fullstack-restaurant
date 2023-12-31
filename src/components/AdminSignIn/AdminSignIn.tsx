"use client"
import loadingGear from "@/assets/images/loading-gear.gif";
import Input from "@/components/shared/Input/Input";
import { useSigninMutation } from "@/redux/features/signin/signinApi";
import Logo from "@/ui/Logo";
import sweetAlert from "@/ui/sweetAlert";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from 'next/image';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(10).max(30).required(),
    secret: yup.string().required(),
});

const AdminSignIn = () => {
    const [signIn, { isSuccess, data, isLoading, isError, error }] = useSigninMutation();
    const searchParams = useSearchParams();
    const ADMIN_SECRET = searchParams.get(process.env.NEXT_PUBLIC_ASN!) || "";

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const router = useRouter();

    //  handle success
    useEffect(() => {
        if (isSuccess) {
            toast.success("Signed In Successfully");
            reset();
            router.push("/");
        }
    }, [isSuccess]);

    //  handle error
    useEffect(() => {
        if (isError && error) {
            toast.error((error as any)?.data?.error);
        }
    }, [isError]);


    // handle sign In
    const adminSignInHandler = (data: any) => {
        if (data?.secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
            return sweetAlert({ icon: "error", title: "OOPS", des: "Admin Secret was wrong!" });
        }
        signIn(data)
    };
    return (
        <div className="font-montserrat px-5 md:px-10 py-20 md:py-26 flex h-screen items-center justify-center">
            <div className="rounded-md w-full sm:w-[70%] md:-w-[60%] lg:w-[40%] xl:w-[35%]  p-4 md:p-6 lg:p-8 xl:p-10" style={{
                boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }}>
                <div className={`${isLoading ? "opacity-40 pointer-events-none" : ""} font-helvatica flex items-center justify-center  mb-5`}>
                    <Logo />
                </div>

                <h3 className="text-white mb-4 text-center text-lg md:text-xl font-bold"> {isLoading ? <Image className="flex mx-auto items-center justify-center" src={loadingGear} alt="loading-gear" width={60} height={60} /> : "Admin Sign In"} </h3>
                {/*  Admin Signin form */}
                <div className={`${isLoading ? "opacity-40 pointer-events-none" : ""}`}>

                    <form className='' onSubmit={handleSubmit(adminSignInHandler)} >

                        <Input data={{ name: "Email", type: 'email', placeholder: `Enter your Email`, error: errors.email?.message, hookFormRegister: register("email") }} />
                        <Input data={{ name: "Password", type: 'password', placeholder: `Enter your Password`, error: errors.password?.message, hookFormRegister: register("password") }} />
                        <small className="-mt-4 mb-5 text-white block">
                            Forgot password ?
                            <Link href="/reset-password" className="font-bold hover:border-b"> Reset </Link>
                        </small>
                        <Input data={{ name: "Admin Secret", type: 'text', placeholder: `This is for admin identification`, error: errors?.secret?.message, hookFormRegister: register("secret") }} />
                        <button type="submit" disabled={isLoading} className="px-4 py-2 rounded border-2 border-sandy-brown text-white uppercase"> sign in  </button>
                    </form>

                    {/*  bottom section */}
                    <div className="text-center mt-5">
                        <p className="mt-8 text-white text-base">
                            Don&apos;t have an admin account ?
                            <Link href={`/admin/signup`} className="font-bold hover:border-b"> Sign Up </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSignIn