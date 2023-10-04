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

                className="absolute h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:w-[200px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[340px] -top-16 md:-top-[18%]  z-[99] left-0"
                alt="leaf"
            />
            <Image
                src={leafLeft}

                className="absolute h-[140px] w-[140px] md:h-[170px] md:w-[170px] lg:w-[200px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[340px] -top-16 md:top-[-18%]  z-[99] right-0"
                alt="restaurant"
            />
            {/* left side image */}
            <div className='lg:container mx-auto px-5 md:px-10 py-20 md:py-26 md:flex items-center justify-start gap-10 max-md:space-y-10'>
                <div className="w-full  md:w-[40%]">
                    <Image
                        src={aboutImg}
                        alt="restaurant"
                        placeholder='blur'
                        className='object-contain md:w-[80%] ml-auto'
                    />
                </div>
                {/* right side text */}
                <div className="w-full md:w-[50%]">
                    <div className="space-y-5 relative">

                        <h3 className="text-white text-lg md:text-xl  tracking-wide">
                            {("YOUR SPECIAL OCCASION DESTINATION")?.split(" ").map((text, ind) => (<p className="inline-block mr-1 md:mr-2" data-aos="fade-right" data-aos-delay={(ind + 1) * 100} key={ind}> {text} </p>))}
                        </h3>

                        <h2 className="text-primary-yellow  font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl"> {("The Wilma is a premium taste that yearns to be savored, ground beef between your teeth").split(" ").map((text, ind) => (<p className="inline-block mr-1 md:mr-2" data-aos="fade-left" key={ind}> {text} </p>))}
                        </h2>

                        <Image
                            data-aos="fade-right"
                            className="w-[60%] lg:w-[55%] 2xl:w-[70%] lg:absolute lg:-bottom-20 xl:-bottom-28 2xl:-bottom-36 lg:-left-10"
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