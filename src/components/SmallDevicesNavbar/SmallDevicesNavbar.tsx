import { XMarkIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarData } from '../Navbar/navbarData';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/redux/app/hooks';
import { selectUser } from '@/redux/features/user/userSelector';
import { userApi } from '@/redux/features/user/userApi';

const SmallDevicesNavbar = ({ closeNav, visible }: { closeNav: () => void, visible: boolean }) => {
    const dispatch = useAppDispatch();
    const { user: { email, picture, username, isAdmin } } = useAppSelector(selectUser);
    const  handleLogout =() => {
         dispatch(userApi.endpoints.logout.initiate(null))   
    }
    
    const pathname = usePathname();
    return (
        <>
            <aside className={`bg-secondary-olive lg:hidden lg:invisible  duration-200 transition-transform ${visible ? "translate-x-[0]" : "translate-x-[100%]"} fixed top-0 right-0 w-[65%] sm:w-[50%] py-14 sm:py-20  px-8 sm:px-10 h-screen z-[9999]`}>

                <XMarkIcon onClick={closeNav} className="cursor-pointer w-9 h-9 text-primary-yellow absolute right-8 top-10" />
                <nav className="pt-8">
                    {/* display logged in user info  */}
                    {
                        email && (
                            <>
                                <Image src={picture} width={100} height={100} className="user-profile border-2 border-primary-yellow rounded-full  w-[75px] sm:w-[90px]" alt={username} />
                                <h3 className="text-white text-lg my-3 capitalize"> {username} </h3>
                            </>
                        )
                    }
                    <ul onClick={closeNav} className="mt-10 space-y-3 text-white">
                        {
                            navbarData.map(({ link, title }) => {
                                const isActive = pathname === link;
                                return (
                                    <li key={title} className={` text-md font-medium ${isActive ? "text-primary-yellow" : ""}`}>
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

                                        <li className={` text-md font-medium ${pathname === "/dashboard/" ? "text-primary-yellow" : ""}`}>
                                            <Link href="/dashboard/"> Dashboard </Link>
                                        </li>

                                        <li onClick={handleLogout} className={`cursor-pointer text-md font-medium`}>
                                            Logout
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className={` text-md font-medium ${pathname === "/signin" ? "text-primary-yellow" : ""}`}>
                                            <Link href="/signin"> Sign In </Link>
                                        </li>
                                        <li className={` text-md font-medium ${pathname === "/siginup" ? "text-primary-yellow" : ""}`}>
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