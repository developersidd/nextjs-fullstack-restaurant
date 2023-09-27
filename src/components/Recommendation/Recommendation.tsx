import Image from 'next/image';

import meal from "@/assets/images/meal-4.png";
import Button from '../shared/Button/Button';

const Recommendation = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-8 py-5 md:py-10  md:flex items-center gap-10'>
            <div className="w-full md:w-1/2  max-sm:pb-10">

                <div className="text-center text-white mx-auto">
                    <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]'> DELIGHT IN EVERY BITE </h3>
                    <h2 className='mx-auto uppercase drop-shadow-lg shadow-black text-3xl md:text-5xl 
                    xl:text-7xl font-bold mb-3 md:mb-4 w-full md:max-w-[95%]  xl:max-w-[85%]'>
                        Our Chef Recommend
                    </h2>

                    <p className='text-sm lg:text-base mx-auto tracking-wide w-full md:max-w-[80%] lg:max-w-[75%] xl:max-w-[60%]'> Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation. </p>
                    <Button title='view menus' path="/menus" />
                </div>
            </div>
            <div className="w-full flex items-center justify-center md:w-1/2 max-md:mb-8 bg-[url('../assets/images/double-leaf.png')] bg-no-repeat h-[55vh] sm:h-[60vh] bg-contain bg-center">
                <Image
                    src={meal}
                    alt="meal"
                    placeholder='blur'
                    className='object-contain w-[200px]'
                />
            </div>
        </div>
    )
}

export default Recommendation;