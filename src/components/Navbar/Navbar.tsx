"use client";
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { selectUser } from '@/redux/features/user/userSelector';
import { ArrowLeftOnRectangleIcon, Bars3Icon, ChartBarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SmallDevicesNavbar from '../SmallDevicesNavbar/SmallDevicesNavbar';
import classes from "./navbar.module.css";
import { navbarData } from './navbarData';
import { userApi } from '@/redux/features/user/userApi';

const Navbar = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const closeNav = () => setVisible(false);
  const { user: { email, picture, username, isAdmin } } = useAppSelector(selectUser);
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const modalClasses = showModal ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-50"
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
    dispatch(userApi.endpoints.logout.initiate(null))
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

          <div className='-mt-2 pr-9'>
            <Link href="/">
              <h1 className="first-letter:text-6xl relative text-white"> S <span className="absolute top-3 text-2xl"> iddik </span>
                <span className="absolute bottom-2 left-9 text-[9px] text-primary-yellow"> RESTAURANT </span>
              </h1>
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

          {/*  Navbar Modal */}
          <div className=' hidden lg:block  max-md:text-sm relative'>

            {
              email ? (
                <div className="flex gap-4 font-medium font-montserrat items-center">
                  {/* show modal click on profile image */}
                  <Image onClick={() => setShowModal(true)} src={picture} width={60} height={60} className={`${showModal ? "" : "cursor-pointer"} navbar-modal rounded-full md:w-[38px] lg:w-[42px] `} alt={username} />
                  {/*  modal body */}
                  <div className={`navbar-modal shadow absolute p-5  md:w-[200px] 2xl:w-[230px] ${modalClasses} duration-250 transition-all ease-in-out top-12 right-5 rounded-md shadow bg-white`}>
                    <Image src={picture} width={100} height={100} className="user-profile border-2 border-primary-yellow rounded-full mx-auto  md:w-[65px] lg:w-[80px]" alt={username} />

                    <h3 className="text-center  lg:text-lg my-3 capitalize"> {username} </h3>
                    <hr />
                    <ul className="mt-4">
                      <Link href="/dashboard/">
                        <li className=" mb-3 flex items-center gap-2 hover:text-primary-yellow">
                          <ChartBarIcon className=" w-8 h-8" />
                          Dashboard
                        </li>
                      </Link>
                      <li className="cursor-pointer flex items-center  gap-2 hover:text-primary-yellow">
                        <ArrowLeftOnRectangleIcon className=" w-8 h-8" />  Logout</li>
                    </ul>

                  </div>

                  <ArrowLeftOnRectangleIcon onClick={handleLogout} className="text-white w-9 h-9 cursor-pointer" />
                </div>
              ) :
                (
                  <>
                    <Link href="/signin" className={`${classes.nav__btn} ${classes.signin} border-2 border-primary-yellow border-r-0 px-3 md:px-4 py-1 md:py-2 `}> Sign In </Link>
                    <Link href="/signup" className={`${classes.nav__btn} ${classes.signup}  border-2 border-primary-yellow  px-3 md:px-4 py-1 md:py-2 `}> Sign Up </Link>
                  </>
                )
            }
          </div>

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