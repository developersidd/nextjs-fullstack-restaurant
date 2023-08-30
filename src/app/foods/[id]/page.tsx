import burger from "@/assets/images/burger.png";
import FoodDetails from '@/components/FoodDetails/FoodDetails';
import ImageMagnifier from "@/components/ImageMagnifier/ImageMagnifier";
import Image from 'next/image';

const FoodItempage = () => {
    return (
        <div className='lg:container mx-auto px-6 md:px-10 py-36'>
            <div className='md:flex items-center justify-between gap-10 max-md:space-y-10 py-16'>
                <div className="w-full md:w-[40%] rounded-full">

                    <ImageMagnifier style={{ borderRadius: "99999px", cursor: "zoom-in" }}>
                        <Image className='max-md:w-[70%] max-md:h-[70%] mx-auto rounded-full' src={burger} alt='burger' />
                    </ImageMagnifier>
                </div>
                <div className="w-full md:w-[55%]  space-y-3 md:space-y-5">
                    <h3 className='text-white tracking-wider text-xl md:text-2xl lg:text-3xl'>VINCENT </h3>
                    <h4 className="text-primary-yellow text-xl md:text-2xl lg:text-3xl font-bold"> $ 2.60 </h4>
                    <p className="text-gray-400">  Classic marinara sauce, authentic old-world pepperoni, all-natural Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned pork and beef. Best an our Hand Tossed crust. With more than 50 years of experience under our belts, we understand how to best serve our customers through tried and true service principles. Instead of following trends, we set them. We create food we&apos;re proud to serve and deliver it fast, with a smile. </p>
                    <div>
                        <input className="w-12 text-center  py-2 mr-5" defaultValue={1} type="number" name="" id="" />
                        <button className='px-6 py-2 border-2 border-primary-yellow uppercase font-medium text-white bg-primary-yellow transition-colors hover:bg-secondary-olive'> add to cart </button>
                    </div>
                </div>
            </div>
            <FoodDetails />
        </div>
    )
}

export default FoodItempage;