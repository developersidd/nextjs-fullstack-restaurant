"use client";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navbarData } from './navbarData';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='h-[120px] flex justify-between items-center bg-secondary-olive'>
      <div>
        <h1 className="first-letter:text-6xl relative text-white"> S <span className="absolute top-3 text-2xl"> iddik </span>
          <span className="absolute bottom-2 left-9 text-[9px] text-primary-yellow"> RESTAURANT </span>
        </h1>
      </div>
      <ul className="flex space-x-4 text-white items-center">
        {
          navbarData.map(({ link, title }) => {
            const isActive = pathname === link;
            return (
              <li key={title} className={` ${isActive ? "text-primary-yellow" : ""}`}>
                <Link href={link}> {title} </Link>
              </li>
            )
          }
          )
        }
        <li className='relative'>
          <ShoppingCartIcon className="w-7 h-7 text-white" />
          <span className="shadow-md absolute text-xs -top-[6px] -right-1 bg-primary-yellow w-5 h-5 flex items-center justify-center rounded-full "> 10 </span>
        </li>

      </ul>
      <div className='text-white px-3 md:px-4 max-md:text-sm py-1 md:py-2 border-2 border-primary-yellow'>
        <Link href="/signin" > Sign In </Link> <span className="text-primary-yellow mx-1">|</span>
        <Link href="/signup"> Sign Up </Link>
      </div>
      {/* for small Revices */}
    </nav>
  )
}

export default Navbar