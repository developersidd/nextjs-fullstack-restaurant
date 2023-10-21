import rightLeaf from "@/assets/images/contact-leaf.png"
import leftLeaf from "@/assets/images/tiny-right-leaf.png"
import Banner from "@/components/shared/Banner/Banner"
import Image from "next/image"

const Contact = () => {
    return (
        <div className="font-montserrat">
            <Banner imgName="bg-[url('../assets/images/contact-banner.jpg')]" title="find us" smTitle="contact" />
            <div className="relative">

                {/* left side image */}
                <Image
                    src={leftLeaf}
                    className="absolute hidden lg:block lg:w-[420px] lg:h-[420px] 2xl:w-[550px] 2xl:h-[550px] -bottom-20 lg:-bottom-36 z-[99] lg:-left-64 rotate-12"
                    alt="leaf"
                />
                {/* right side image */}
                <Image
                    src={rightLeaf}
                    className="hidden lg:block absolute lg:w-[200px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[340px] lg:-top-36 xl:-top-48  z-[99] right-0"
                    alt="restaurant"
                />
            </div>
            {/*  contact info */}
            <div className="lg:container mx-auto px-5 md:px-8 py-10 md:py-16 lg:py-20 md:flex items-center justify-between text-gray-200">
                <div className="space-y-7">
                    <div>
                        <h3 className="">Contact </h3>
                        <p> 732/21 Second Street, Manchester </p>
                        <p> Kingston United Kingdom </p>
                    </div>
                    <div>
                        <h3 className="">  Follow Us
                        </h3>
                        {["Facebook", "Twitter", "Instagram"]}
                    </div>
                </div>
                <div className="space-y-7">
                    <div>
                        <h3 className=""> T: +65 (0) 76-890-214 </h3>
                        <h3 className=""> E: bookings@wilma.co.uk </h3>
                    </div>
                    <div>
                        <h3 className="mb-5"> Opening Hours </h3>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4>Lunch Time </h4>
                                <p> Monday to Sunday </p>
                                <p> 10.30am - 3:00pm</p>
                            </div>
                            <div>
                                <h4> Dinner Time </h4>
                                <p>  Monday to Sunday </p>
                                <p>  5.30pm - 11:00pm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact