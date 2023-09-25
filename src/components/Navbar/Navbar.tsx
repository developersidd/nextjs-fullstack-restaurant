"use client";
import Logo from '@/ui/Logo';
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SmallDevicesNavbar from '../SmallDevicesNavbar/SmallDevicesNavbar';
import NavbarRightContent from './NavbarRightContent';
import { navbarData } from './navbarData';
import { userApi } from '@/redux/features/user/userApi';
import { useAppDispatch } from '@/redux/app/hooks';

const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeNav = () => setVisible(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dispatch = useAppDispatch();

  // navbar handler
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else if (lastScrollY < 200) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    }
    setLastScrollY(window.scrollY);
  }
  
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
  }, [])

  // handle show navbar on scroll
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
    <div className={`z-[9999]  bg-transparent ${showNav ? "shadow-md md:fixed md:h-[95px] top-0 left-0 w-full transition md:backdrop-blur-sm md:bg-[#0B1517]/40" : ""}`} >
      <nav className={`lg:container px-6 md:px-10 mx-auto absolute top-0 left-0 right-0  font-helvatica z-[9999]`}>
        <div className={`flex justify-between items-center ${showNav ? "h-[95px]" : "h-[120px]"} `}>
          {/*  logo */}
          <div className=''>
            <Link href="/">
            <Logo />
            </Link>
          </div>

          {/* navbar links */}
          <ul className="hidden lg:flex text- space-x-8 lg:space-x-10 text-white items-center">
            {
              navbarData?.map(({ link, title }) => {
                const isActive = pathname === link;
                return (
                  <li key={title} className={` ${isActive ? "text-primary-yellow" : ""} md:text-md cursor-pointer`}>
                    <Link href={link}> {title} </Link>
                  </li>
                )
              }
              )
            }
            {/*  cart link */}
            <li className='relative'>
              <Link href="/cart">
                <ShoppingCartIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                <span className="shadow-md absolute text-xs md:text-sm -top-[6px] -right-1 bg-primary-yellow w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full "> 10 </span>
              </Link>
            </li>
          </ul>

          {/*  Navbar Modal and right side links */}
          <NavbarRightContent />

          {/* navbar for small Devices */}
          <div className='lg:hidden flex items-center gap-3'>
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="w-7 h-7 text-white " />
              <span className="text-white shadow-md absolute text-xs -top-[6px] -right-1 bg-primary-yellow w-5 h-5 flex items-center justify-center rounded-full "> 0 </span>
            </Link>
            <Bars3Icon onClick={() => setVisible(true)} className="w-7 h-7 text-white cursor-pointer" />
          </div>
        </div>
      </nav >
      <SmallDevicesNavbar closeNav={closeNav} visible={visible} />
    </div >
  )
}

export default Navbar