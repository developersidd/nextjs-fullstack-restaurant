import FoodCategories from "@/components/FoodCategories/FoodCategories";
import Foods from '@/components/Foods/Foods';
import Banner from "@/components/shared/Banner/Banner";
import type { TypeSearchParams } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Explore Foods - Siddik Restaurant',
}

const FoodsPage = ({ searchParams }: { searchParams: TypeSearchParams }) => {

  return (
    <div>
      <Banner imgName={"bg-[url('../assets/images/foods-banner.jpg')]"} smTitle="Explore Foods" title="Good food and
Great vibes" />
      <FoodCategories searchParams={searchParams} />
      <Foods />
    </div>
  )
}

export default FoodsPage;