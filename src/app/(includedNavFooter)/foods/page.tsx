import FoodCategories from "@/components/FoodCategories/FoodCategories";
import Foods from '@/components/Foods/Foods';
import Banner from "@/components/shared/Banner/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Explore Foods - Siddik Restaurant',
}


const FoodsPage = () => {

  return (
    <div>
      <Banner imgName={"bg-[url('../assets/images/foods-banner.jpg')]"} smTitle="Explore Foods" title="Good Food Good Life" />
      <FoodCategories />
      <Foods />
    </div>
  )
}

export default FoodsPage;