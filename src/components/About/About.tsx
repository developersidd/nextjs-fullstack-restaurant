import aboutImg from "@/assets/images/about.jpg";
import divider from "@/assets/images/divider.png";
import leafLeft from "@/assets/images/home-leaf-left.png";
import leafRight from "@/assets/images/home-leaf-right.png";
import Image from 'next/image';

const AboutComp = () => {
    return (
        <div className="relative">
            <Image

                src={leafRight}

                className="absolute h-[140px] w-[140px] md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[340px] -top-16 md:-top-[18%]  z-[99] left-0"
                alt="leaf"
            />
            <Image
                src={leafLeft}

                className="absolute h-[140px] w-[140px] md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[340px] -top-16 md:top-[-18%]  z-[99] right-0"
                alt="restaurant"
            />
            <div className='lg:container mx-auto px-5 md:px-10 py-20 md:py-26 md:flex items-center justify-start gap-10 max-md:space-y-10'>
                <div className="w-full md:w-[45%]">
                    <Image

                        src={aboutImg}
                        alt="restaurant"
                        placeholder='blur'
                        className='object-contain md:w-[80%] ml-auto'
                    />
                </div>
                <div className="w-full md:w-[50%]">
                    <div className="space-y-5">
                        <h3 className="text-white text-lg md:text-xl  tracking-wide">
                            YOUR SPECIAL OCCASION DESTINATION
                        </h3>
                        <h2 className="text-primary-yellow  font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl"> The Wilma is a premium taste that yearns to be savored, ground beef between your teeth </h2>
                        <Image
                            className=""
                            src={divider}
                            alt="restaurant"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutComp;