import rightLeaf from "@/assets/images/contact-leaf.png";
import leftLeaf from "@/assets/images/tiny-right-leaf.png";
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactMap from "@/components/Contact/ContactMap";
import Banner from "@/components/shared/Banner/Banner";
import Image from "next/image";

const Contact = () => {
    return (
        <div className="font-montserrat">
            <Banner imgName="bg-[url('../assets/images/contact-banner.jpg')]" title="find us" smTitle="contact" />
            {/*  side images */}
            <div className="relative">

                {/* left side image */}
                <Image
                    src={leftLeaf}
                    className="absolute hidden lg:block lg:w-[420px] lg:h-[420px] 2xl:w-[550px] 2xl:h-[550px] -bottom-20 lg:-bottom-36 z-[99] lg:-left-64 xl:-left-80 rotate-12"
                    alt="leaf"
                />
                {/* right side image */}
                <Image
                    src={rightLeaf}
                    className="hidden lg:block absolute lg:w-[200px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[340px] lg:-top-36 xl:-top-48  z-[99] -right-14 lg:-right-28"
                    alt="restaurant"
                />
            </div>
            {/*  information */}
            <ContactInfo />
            {/*  Map */}
            <ContactMap />
        </div>
    )
}

export default Contact