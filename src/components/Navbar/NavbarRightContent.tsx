import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { userApi } from '@/redux/features/user/userApi';
import { selectUser } from '@/redux/features/user/userSelector';
import { ArrowLeftOnRectangleIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from "./navbar.module.css";
const NavbarRightContent = () => {
    const { user: { email, picture, username, isAdmin } } = useAppSelector(selectUser);
    const [showModal, setShowModal] = useState(false);
    const modalClasses = showModal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-50"
    const dispatch = useAppDispatch();

    // handle user logout
    const handleLogout = () => {
        dispatch(userApi.endpoints.logout.initiate())
    }

    // handle close modal on click outside
    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (typeof window !== "undefined") {
                const target = e.target as Element;
                target.classList.contains("navbar-modal") ? null : setShowModal(false)
            }
        });
    }, []);

    return <div className=' hidden lg:block  max-md:text-sm relative'>

        {
            email ? (
                <div className="flex gap-4 font-medium font-montserrat items-center">
                    {/* show modal click on profile image */}
                    <Image onClick={() => setShowModal(true)} src={picture} width={60} height={60} className={`${showModal ? "" : "cursor-pointer"} navbar-modal rounded-full md:w-[38px] lg:w-[42px] `} alt={username} />
                    {/*  modal body */}
                    <div className={`navbar-modal shadow absolute p-5  md:w-[200px] 2xl:w-[230px] ${modalClasses} duration-250 transition-all ease-in-out top-12 right-5 rounded-md shadow bg-white`}>
                        <Image src={picture} width={100} height={100} className="user-profile border-2 border-sandy-brown rounded-full mx-auto  md:w-[65px] lg:w-[80px]" alt={username} />

                        <h3 className="text-center  lg:text-lg my-3 capitalize"> {username} </h3>
                        <hr />
                        <ul className="mt-4">
                            <Link href="/dashboard/">
                                <li className=" mb-3 flex items-center gap-2 hover:text-sandy-brown">
                                    <ChartBarIcon className=" w-8 h-8" />
                                    Dashboard
                                </li>
                            </Link>
                            <li className="cursor-pointer flex items-center  gap-2 hover:text-sandy-brown">
                                <ArrowLeftOnRectangleIcon className=" w-8 h-8" />  Logout</li>
                        </ul>

                    </div>

                    <ArrowLeftOnRectangleIcon onClick={handleLogout} className="text-white w-9 h-9 cursor-pointer" />
                </div>
            ) :
                (
                    <>
                        <Link href="/signin" className={`${classes.nav__auth__btn} ${classes.signin} border-2 border-sandy-brown border-r-0 px-3 md:px-4 py-1 md:py-2 `}> Sign In </Link>
                        <Link href="/signup" className={`${classes.nav__auth__btn} ${classes.signup}  border-2 border-sandy-brown  px-3 md:px-4 py-1 md:py-2 `}> Sign Up </Link>
                    </>
                )
        }
    </div>

}

export default NavbarRightContent