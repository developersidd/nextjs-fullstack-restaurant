import divider from "@/assets/images/single-divider.png";
import Image from 'next/image';
const Titles = ({ smTitle, title }: { title: string, smTitle: string }) => {
    return (
        <div className="text-center mx-auto pt-20 px-2 text-white  md:max-w-[75%] lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[47%]">
            <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]'> {smTitle} </h3>
            <div className="flex items-center justify-center">
                <Image
                    src={divider}
                    className="max-md:hidden"
                    alt="divider"
                />
                <h2 className='mx-auto capitalize drop-shadow-lg shadow-black text-3xl md:text-4xl lg:text-5xl 
                xl:text-7xl font-bold mb-3 md:mb-4'>
                    {title}
                </h2>
                <Image
                    src={divider}
                    className="max-md:hidden"
                    alt="divider"
                />
            </div>
        </div>
    )
}

export default Titles