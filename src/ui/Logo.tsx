"use client"
import logo from "@/assets/images/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const isTabletSize = useMediaQuery("768");
  const isDesktopSize = useMediaQuery("1280");

  let responsiveSize = 0;

  if (isTabletSize) {
    responsiveSize = 150;
  } else if (isDesktopSize) {
    responsiveSize = 180
  } else {
    responsiveSize = 200
  }

  return (
    <Link href="/" className="">
      <Image width={responsiveSize} height={responsiveSize} className="block w-[130px] md:w-[150px] lg:w-[180px] mx-auto object-contain" src={logo} alt="siddik-restaurant" />
    </Link>
  )
}

export default Logo;