"use client";
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SmallDevicesNavbar from '../SmallDevicesNavbar/SmallDevicesNavbar';
import classes from "./navbar.module.css";
import { navbarData } from './navbarData';

const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeNav = () => setVisible(false);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // navbar handler
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else if (lastScrollY < 200) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`z-[9999]  bg-transparent ${show ? "shadow-md md:fixed md:h-[95px] top-0 left-0 w-full transition md:backdrop-blur-sm md:bg-[#0B1517]/40" : ""}`} >
      <nav className={`lg:container px-6 md:px-10 mx-auto absolute top-0 left-0 right-0  font-helvatica z-[9999]`}>
        <div className={`flex justify-between items-center ${show ? "h-[95px]" : "h-[120px]"} `}>

          <div className='-mt-2 pr-9'>
            <Link href="/">
              <h1 className="first-letter:text-6xl relative text-white"> S <span className="absolute top-3 text-2xl"> iddik </span>
                <span className="absolute bottom-2 left-9 text-[9px] text-primary-yellow"> RESTAURANT </span>
              </h1>
            </Link>
          </div>


          <ul className="hidden lg:flex text- space-x-8 lg:space-x-10 text-white items-center">
            {
              navbarData.slice(0, 5).map(({ link, title }) => {
                const isActive = pathname === link;
                return (
                  <li key={title} className={` ${isActive ? "text-primary-yellow" : ""} md:text-md cursor-pointer`}>
                    <Link href={link}> {title} </Link>
                  </li>
                )
              }
              )
            }
            <li className='relative'>
              <Link href="/cart">
                <ShoppingCartIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                <span className="shadow-md absolute text-xs md:text-sm -top-[6px] -right-1 bg-primary-yellow w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full "> 10 </span>
              </Link>
            </li>
          </ul>

          <div className='hidden lg:block text-white max-md:text-sm'>
            <Link href="/signin" className={`${classes.nav__btn} ${classes.signin} border-2 border-primary-yellow border-r-0 px-3 md:px-4 py-1 md:py-2 `}> Sign In </Link>
            <Link href="/signup" className={`${classes.nav__btn} ${classes.signup}  border-2 border-primary-yellow  px-3 md:px-4 py-1 md:py-2 `}> Sign Up </Link>
          </div>

          {/* for small Devices */}
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
    </div>
  )
}

export default Navbar