import Image from 'next/image';
import aboutImg from "@/assets/images/about.jpg";
import divider from "@/assets/images/divider.png";
import leafLeft from "@/assets/images/home-leaf-left.png";
import leafRight from "@/assets/images/home-leaf-right.png";

const AboutComp = () => {
    return (
        <div className="relative">
            <Image 

                src={leafRight}
                
                className="absolute h-[110px] w-[110px] md:h-[150px] md:w-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[350px] -top-14 md:-top-20 xl:-top-40 z-[99] left-0"
                alt="leaf"
            />
            <Image
                src={leafLeft}
                
                className="absolute h-[110px] w-[110px] md:h-[150px] md:w-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[350px] -top-14 md:-top-20 xl:-top-40 z-[99] right-0"
                alt="restaurant"
            />
            <div className='lg:container mx-auto px-6 md:px-10 py-20 md:py-26 md:flex items-center gap-10'>
                <div className="w-full md:w-1/2 max-md:mb-8">
                    <Image
                        src={aboutImg}
                        alt="restaurant"
                        placeholder='blur'
                        className='object-contain'
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <div className="space-y-5">
                        <h3 className="text-white text-lg md:text-xl  tracking-wide">
                            YOUR SPECIAL OCCASION DESTINATION
                        </h3>
                        <h2 className="text-primary-yellow font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl"> The Wilma is a premium taste that yearns to be savored, ground beef between your teeth </h2>
                        <Image
                            src={divider}
                            alt="restaurant"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutComp