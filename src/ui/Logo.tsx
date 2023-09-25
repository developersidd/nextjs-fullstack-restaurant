import logo from "@/assets/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <Image className="w-[130px] md:w-[150px] lg:w-[180px] mx-auto   object-contain" src={logo} alt="siddik-restaurant" />
    </Link>
  )

}

export default Logo