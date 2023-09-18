//"use client";
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarData } from '../Navbar/navbarData';

const SmallDevicesNavbar = ({ closeNav, visible }: { closeNav: () => void, visible: boolean }) => {

    const pathname = usePathname();
    return (
        <>
            <aside className={`bg-secondary-olive lg:hidden lg:invisible  duration-200 transition-transform ${visible ? "translate-x-[0]" : "translate-x-[100%]"} fixed top-0 right-0 w-[65%] py-20 px-10 h-screen z-[9999]`}>

                <XMarkIcon onClick={closeNav} className="cursor-pointer w-9 h-9 text-primary-yellow absolute right-8 top-10" />
                <nav>
                    <ul className="space-y-4 text-white">
                        {
                            navbarData.map(({ link, title }) => {
                                const isActive = pathname === link;
                                return (
                                    <li onClick={closeNav} key={title} className={` text-md font-medium ${isActive ? "text-primary-yellow" : ""}`}>
                                        <Link href={link}> {title} </Link>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                </nav>
            </aside>
            <div className={`h-screen lg:hidden ${visible ? "visible" : "invisible"} fixed top-0 left-0 bg-black/50 w-[35%] z-[9999]`} onClick={closeNav}></div>
        </>
    )
}

export default SmallDevicesNavbar