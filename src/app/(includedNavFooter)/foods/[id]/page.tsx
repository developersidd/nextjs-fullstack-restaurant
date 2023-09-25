import loadingGear from "@/assets/images/loading-gear.gif";
import FoodDetails from '@/components/FoodDetails/FoodDetails';
import ImageMagnifier from "@/components/ImageMagnifier/ImageMagnifier";
import { useGetFoodQuery } from "@/redux/features/food/foodApi";
import Image from 'next/image';
export const generateMetadata = ({ params: { id } }: { params: { id: string } }) => {
    return {
        
    }
}

const FoodItemPage = ({ params }: { params: any }) => {
    const { isLoading, data: food } = useGetFoodQuery(params?.id);
    const { image, description, price, title } = food?.data || {};
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen flex-col">
            <Image src={loadingGear} className="w-[100px] md:w-[120px] lg:w-[150px] mb-5" alt="loading-gear" />
        </div>
    }


    return (
        <div className='lg:container mx-auto px-6 md:px-10 py-36'>
            <div className='md:flex items-center justify-between gap-10 max-md:space-y-10 py-16'>
                <div className="w-[70%] mx-auto md:w-[40%] rounded-full">

                    <ImageMagnifier style={{ borderRadius: "99999px", cursor: "zoom-in" }}>
                        <Image className='w-full h-full  mx-auto rounded-full' width={700} height={700} src={image!} alt={title!} />
                    </ImageMagnifier>
                </div>
                <div className="w-full md:w-[55%]  space-y-3 md:space-y-5">
                    <h3 className='text-white tracking-wider text-xl md:text-2xl lg:text-3xl'> {title} </h3>
                    <h4 className="text-primary-yellow text-xl md:text-2xl lg:text-3xl font-bold"> $ {price} </h4>
                    <p className="text-gray-400">  {description} </p>
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

export default FoodItemPage;