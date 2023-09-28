import divider from "@/assets/images/single-divider.png";
import Image from 'next/image';
const Titles = ({ smTitle, title }: { title: string, smTitle: string }) => {
    return (
        <div className="text-center mx-auto pt-20 px-2 text-white  md:max-w-[75%] lg:max-w-[70%] xl:max-w-[55%] 2xl:max-w-[47%]">
            <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]'>
                {smTitle?.split(" ").map((text, ind) => (<p className="inline-block mr-3 md:mr-4" data-aos="fade-down" data-aos-delay={(ind + 1) * 50} key={ind}> {text} </p>))}

            </h3>
            <div className="flex items-center justify-center">
                <Image
                    src={divider}
                    className="max-md:hidden"
                    alt="divider"
                    data-aos="fade-up" data-aos-delay="70"
                />
                <h2 className='mx-auto capitalize drop-shadow-lg shadow-black text-3xl md:text-4xl lg:text-5xl 
                xl:text-7xl font-bold mb-3 md:mb-4'>
                    {title?.split(" ").map((text, ind) => (<p className="inline-block mr-3 md:mr-4" data-aos="fade-left" data-aos-delay={(ind + 1) * 100} key={ind}> {text} </p>))}
                </h2>
                <Image
                    src={divider}
                    className="max-md:hidden"
                    alt="divider"
                    data-aos="fade-up"
                    data-aos-delay="70"
                />
            </div>
        </div>
    )
}

export default Titles