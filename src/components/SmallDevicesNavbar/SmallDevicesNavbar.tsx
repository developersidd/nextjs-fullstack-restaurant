import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { userApi } from '@/redux/features/user/userApi';
import { selectUser } from '@/redux/features/user/userSelector';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarData } from '../Navbar/navbarData';

const SmallDevicesNavbar = ({ closeNav, visible }: { closeNav: () => void, visible: boolean }) => {
    const dispatch = useAppDispatch();
    const { user: { email, picture, username, isAdmin } } = useAppSelector(selectUser);

    const handleLogout = () => {
        dispatch(userApi.endpoints.logout.initiate())
    }

    const pathname = usePathname();
    return (
        <>
            <aside className={`bg-olive lg:hidden lg:invisible  duration-200 transition-transform ${visible ? "translate-x-[0]" : "translate-x-[100%]"} fixed top-0 right-0 w-[65%] sm:w-[50%] py-14 sm:py-20  px-8 sm:px-10 h-screen z-[9999]`}>

                <XMarkIcon onClick={closeNav} className="cursor-pointer w-9 h-9 text-sandy-brown absolute right-8 top-10" />
                <nav className="pt-8">
                    {/* display logged in user info  */}
                    {
                        email && (
                            <>
                                <Image src={picture} width={100} height={100} className="user-profile border-2 border-sandy-brown rounded-full  w-[75px] sm:w-[90px]" alt={username} />
                                <h3 className="text-white text-lg my-3 capitalize"> {username} </h3>
                            </>
                        )
                    }
                    <ul onClick={closeNav} className="mt-10 space-y-3 text-white">
                        {
                            navbarData.map(({ link, title }) => {
                                const isActive = pathname === link;
                                return (
                                    <li key={title} className={` text-md font-medium ${isActive ? "text-sandy-brown" : ""}`}>
                                        <Link href={link}> {title} </Link>
                                    </li>

                                )
                            }
                            )
                        }
                        {/*  show links based on user Authentication */}
                        {
                            email ?
                                (
                                    <>

                                        <li className={` text-md font-medium ${pathname === "/dashboard/" ? "text-sandy-brown" : ""}`}>
                                            <Link href="/dashboard/"> Dashboard </Link>
                                        </li>

                                        <li onClick={handleLogout} className={`cursor-pointer text-md font-medium`}>
                                            Logout
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className={` text-md font-medium ${pathname === "/signin" ? "text-sandy-brown" : ""}`}>
                                            <Link href="/signin"> Sign In </Link>
                                        </li>
                                        <li className={` text-md font-medium ${pathname === "/siginup" ? "text-sandy-brown" : ""}`}>
                                            <Link href="/siginup"> Sign Up </Link>
                                        </li>
                                    </>
                                )
                        }
                    </ul>
                </nav>
            </aside>
            <div className={`h-screen lg:hidden ${visible ? "visible" : "invisible"} fixed top-0 left-0 bg-black/50 w-[35%] sm:w-[50%] z-[9999]`} onClick={closeNav}></div>
        </>
    )
}

export default SmallDevicesNavbar