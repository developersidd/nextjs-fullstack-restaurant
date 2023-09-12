import Image, { StaticImageData } from 'next/image';

const Menu = ({ imgFirst = true, src, des, title, children, }: { children: React.ReactNode, imgFirst?: boolean, src: StaticImageData, title: string, des: string, }) => {
    return (
        <div className='lg:container mx-auto px-6 md:px-10 py-10 md:py-20'>
            <div className='md:flex items-center justify-center gap-10'>
                <div className={`${imgFirst ? "order-1" : "order-1 md:order-2"} w-full md:w-[45%] max-md:mb-8`}>
                    <div className={`border-2 border-primary-yellow w-full p-2 md:w-[80%]  ${imgFirst ? "md:mr-auto" : "md:ml-auto"}`}>

                        <Image
                            src={src}
                            alt="restaurant"
                            //placeholder='blur'
                            className={`object-contain w-full border-2 border-primary-yellow `}
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
                <div className={`${imgFirst ? "order-1 md:order-2" : "order-1 "} w-full md:w-[45%] xl:w-[37%]`}>
                    <div className="space-y-5 text-white">
                        <h2 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                            {title}
                        </h2>
                        <p className=" text-base md:text-md  tracking-wide">
                            {des}
                        </p>
                        <div className='pt-8'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu