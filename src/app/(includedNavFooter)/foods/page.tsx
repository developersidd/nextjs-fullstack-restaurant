import leafRight from "@/assets/images/tiny-leaf.png";
import FoodCategories from "@/components/FoodCategories/FoodCategories";
import Foods from '@/components/Foods/Foods';
import Banner from "@/components/shared/Banner/Banner";
import Image from 'next/image';
const FoodsPage = () => {
  return (
    <div>
      <Banner imgName={"bg-[url('../assets/images/foods-banner.jpg')]"} smTitle="Batijah" title="Hello World" />
      <FoodCategories />
      <Foods />
    </div>
  )
}

export default FoodsPage