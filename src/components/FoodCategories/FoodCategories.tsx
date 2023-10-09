import Link from 'next/link';
import type { TypeSearchParams } from '../../types';
import Titles from '../shared/Titles/Titles';
const categories = ["burger", "dessert", "pasta", "pizza"];

const FoodCategories = ({ searchParams }: { searchParams: TypeSearchParams }) => {
    const category = (searchParams?.category || "burger") as string;

    return (
        <div className="font-montserrat">
            <Titles smTitle='fell free to explore our foods' title='Our Foods' />
            <div className='flex max-md:flex-wrap items-center justify-center gap-4 mt-10 md:mt-16'>
                {categories.map(cat => (
                    <Link href={`?${new URLSearchParams({
                        category: cat
                    })}`} key={cat} scroll={false} className={`uppercase max-sm:text-sm tracking-wider px-4 py-2 text-white transition-colors  rounded-full font-bold ${category === cat ? "bg-sandy-brown" : "hover:text-sandy-brown"}`}> {cat}</Link>
                ))}
            </div>
        </div>
    )
}


export default FoodCategories