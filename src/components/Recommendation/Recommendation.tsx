import Image from 'next/image';

import meal from "@/assets/images/meal-4.png";
import Titles from '../shared/Titles/Titles';

const Recommendation = () => {
    return (
        <div className='lg:container mx-auto px-6 md:px-8 py-16 md:py-20 h-[100vh] md:flex items-center gap-10 max-sm:space-y-12'>
            <div className="w-full md:w-1/2">
                <Titles
                    smTitle="DELIGHT IN EVERY BITE"
                    title="Our Chef Recommend"
                    des="Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation."
                    showDes={true}
                />
            </div>
            <div className="w-full flex items-center justify-center md:w-1/2 max-md:mb-8 bg-[url('../assets/images/double-leaf.png')] bg-no-repeat h-full bg-contain bg-center">
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