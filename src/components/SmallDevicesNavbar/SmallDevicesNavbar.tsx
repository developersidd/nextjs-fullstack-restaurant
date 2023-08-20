"use client";
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarData } from '../Navbar/navbarData';
const SmallDevicesNavbar = () => {
    const pathname = usePathname()
    return (
        <aside className='bg-secondary-olive w-[30%] relative py-20 px-10
        h-screen'>
            
            <XMarkIcon className="cursor-pointer w-9 h-9 text-primary-yellow absolute right-8 top-10" />
            <nav>                
                <ul className="space-y-2 text-white">
                {
                    navbarData.map(({ link, title }) => {
                        const isActive = pathname === link;
                        return (
                            <li key={title} className={` text-lg font-medium ${isActive ? "text-primary-yellow" : ""}`}>
                                <Link href={link}> {title} </Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
            </nav>
        </aside>
    )
}

export default SmallDevicesNavbar