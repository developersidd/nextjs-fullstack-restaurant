"use client";
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SmallDevicesNavbar from '../SmallDevicesNavbar/SmallDevicesNavbar';
import { navbarData } from './navbarData';
import classes from  "./navbar.module.css";
const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeNav = () => setVisible(false);
  return (
    <>
      <nav className='px-6 md:px-10  absolute top-0 left-0 right-0  font-helvatica z-[999]'>
        <div className='flex justify-between items-center h-[120px]'>

          <div className='-mt-3 pr-9'>
            <h1 className="first-letter:text-6xl relative text-white"> S <span className="absolute top-3 text-2xl"> iddik </span>
              <span className="absolute bottom-2 left-9 text-[9px] text-primary-yellow"> RESTAURANT </span>
            </h1>
          </div>


          <ul className="hidden lg:flex space-x-8 lg:space-x-10 text-white items-center">
            {
              navbarData.slice(0, 5).map(({ link, title }) => {
                const isActive = pathname === link;
                return (
                  <li key={title} className={` ${isActive ? "text-primary-yellow" : ""} cursor-pointer`}>
                    <Link href={link}> {title} </Link>
                  </li>
                )
              }
              )
            }
            <li className='relative'>
              <Link href="/cart">
                <ShoppingCartIcon className="w-7 h-7 text-white" />
                <span className="shadow-md absolute text-xs -top-[6px] -right-1 bg-primary-yellow w-5 h-5 flex items-center justify-center rounded-full "> 10 </span>
              </Link>
            </li>
          </ul>

          <div className='hidden lg:block text-white max-md:text-sm'>
            <Link href="/signin" className={`${classes.nav__btn} ${classes.signin} border-2 border-primary-yellow border-r-0 px-3 md:px-4 py-1 md:py-2 `}> Sign In </Link> 
            <Link href="/signup" className={`${classes.nav__btn} ${classes.signup}  border-2 border-primary-yellow  px-3 md:px-4 py-1 md:py-2 `}> Sign Up </Link>
          </div>

          {/* for small Revices */}
          <div className='lg:hidden flex items-center gap-3'>
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-7 h-7 text-white " />
              <span className="text-white shadow-md absolute text-xs -top-[6px] -right-1 bg-primary-yellow w-5 h-5 flex items-center justify-center rounded-full "> 0 </span>
            </Link>
            <Bars3Icon onClick={() => setVisible(true)} className="w-7 h-7 text-white cursor-pointer" />
          </div>
        </div>
      </nav>
      <SmallDevicesNavbar closeNav={closeNav} visible={visible} />
    </>
  )
}

export default Navbar