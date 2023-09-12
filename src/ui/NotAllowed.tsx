import warning from "@/assets/images/warning.png"
import Image from 'next/image'
import Link from 'next/link'
const NotAllowed = () => {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <Image src={warning} className="w-[30%] md:w-[20%] mb-5" alt="smiley-face" />
            <h1 className='text-white font-bold text-xl md:text-3xl xl:text-4xl mb-8'> Your Are Not Allowed To Access this Page <span className="text-red-500">!</span>  </h1>
            <Link href="/" className='px-4 py-2 border-2 border-primary-yellow text-white font-medium'> Back to Home </Link>
        </div>
    )
}

export default NotAllowed