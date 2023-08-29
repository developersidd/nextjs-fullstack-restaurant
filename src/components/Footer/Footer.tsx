import Link from 'next/link'
import { navbarData } from '../Navbar/navbarData'

const Footer = () => {
    return (
        <>
            <div className='lg:container mx-auto px-6 md:px-10 py-10 flex gap-y-8 flex-col md:flex-row items-center md:justify-between justify-center'>
                <div className='max-md:pr-[6rem] w-full md:w-[32%] mx-auto max-md:text-center'>
                    <Link href="/" className="inline-block ">
                        <h1 className="first-letter:text-8xl relative text-primary-yellow"> S <span className="absolute top-5 text-4xl"> iddik </span>
                            <span className="absolute bottom-4 left-[3.6rem] text-[13px] text-primary-yellow"> RESTAURANT </span>
                        </h1>
                    </Link>
                </div>
                <div className='md:border-r border-primary-yellow md:border-l py-5 max-md:border-t max-md:border-b  w-full md:w-[33%] mx-auto flex items-center justify-center'>
                    <ul className="space-y-3">
                        {navbarData.slice(0, 4).map(({ link, title }) => (
                            <li key={title} className={` text-lg md:text-xl cursor-pointer text-primary-yellow`}>
                                <Link href={link}> {title} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-[33%] mx-auto">
                    <div className="flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 30 30">
                            <path fill="#CA9C5E" d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 50 50">
                            <path fill="#CA9C5E" d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="40" viewBox="0 0 64 64">
                            <path fill="#CA9C5E" d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="p-7 text-center text-white">
                <p> &copy;copyright all right reserved   &nbsp; - &nbsp;  AB-SIDDIK   &nbsp; -  &nbsp; {new Date().getFullYear()} </p>
            </div>
        </>
    )
}

export default Footer