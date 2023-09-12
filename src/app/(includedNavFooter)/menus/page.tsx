import leafLeft from "@/assets/images/home-leaf-right.png";
import leafRight from "@/assets/images/tiny-leaf.png";
import AllMenus from '@/components/Menu/AllMenus';
import Image from 'next/image';
const MenusPage = () => {
    return (
        <div className='font-montserrat relative'>

            <div className={`h-[80vh] w-full flex items-center justify-center 
    `}>
                <Image

                    src={leafLeft}

                    className="absolute h-[140px] w-[140px] md:h-[200px] md:w-[200px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[340px] top-0  z-[99] left-0"
                    alt="leaf"
                />
                <Image
                    src={leafRight}

                    className="absolute h-[300px] w-[320px] md:h-[360px] md:w-[350px] lg:w-[400px] lg:h-[380px] xl:w-[550px] xl:h-[440px]  -top-16  z-[99] -right-40 -rotate-[35deg]"
                    alt="restaurant"
                />
                <div className="container mx-auto px-6 md:px-10 z-[999]">

                    <div className="text-center text-white mx-auto">
                        <h3 className='font-montserrat uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]' data-aos="fade-up" data-aos-delay="70"> DELICIOUS AND NUTRITIOUS </h3>
                        <h2 className='font-helvatica mx-auto uppercase drop-shadow-lg shadow-black text-3xl md:text-5xl xl:text-7xl 
            font-bold mb-3 md:mb-4  w-full md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] 
            ' data-aos="zoom-in" > Refill Your Tank
                        </h2>
                        <p data-aos="fade-right" data-aos-delay="100" className='font-montserrat text-sm lg:text-base mx-auto tracking-wide w-full md:max-w-[70%] lg:max-w-[65%] xl:max-w-[45%]'> When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat. </p>
                    </div>
                </div>

            </div>
            <AllMenus />
        </div>
    )
}

export default MenusPage