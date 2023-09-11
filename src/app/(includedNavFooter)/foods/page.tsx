import FoodCategories from "@/components/FoodCategories/FoodCategories";
import Foods from '@/components/Foods/Foods';
import Banner from "@/components/shared/Banner/Banner";
const FoodsPage = () => {
  return (
    <div>
      <Banner imgName={"bg-[url('../assets/images/foods-banner.jpg')]"} smTitle="Explore Foods" title="Good Food Good Life" />
      <FoodCategories />
      <Foods />
    </div>
  )
}

export default FoodsPage