import AboutComp from "@/components/About/About";
import FoodCategories from "@/components/FoodCategories/FoodCategories";
import Foods from "@/components/Foods/Foods";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import AllMenus from "@/components/Menu/AllMenus";
import Recommendation from "@/components/Recommendation/Recommendation";
import Banner from "@/components/shared/Banner/Banner";
import Button from "@/components/shared/Button/Button";
import Titles from "@/components/shared/Titles/Titles";
import type { TypeSearchParams } from "@/types";

export default function Home({ searchParams }: { searchParams: TypeSearchParams }) {
  return (
    <main className="font-montserrat">
      <Banner imgName="bg-[url('../assets/images/home-banner.jpg')]" title="Taste The Difference" smTitle="MORE FLAVOR FOR LESS">
        {/*  Banner text */}
        <>
          <p data-aos="fade-right" data-aos-delay="100" className='text-sm lg:text-base mx-auto tracking-wide w-full md:max-w-[70%] lg:max-w-[65%] xl:max-w-[45%]'> When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat. </p>
          <Button data-aos="zoom-in-down" data-aos-delay="110" title='our menus' path="/menus" />
        </>
      </Banner>
      <AboutComp />
      <Recommendation />

      <section>
        <Titles smTitle="MAKE FOOD, NOT WAR" title="Our Menus" />
        <AllMenus />
      </section>
      <section>
        <FoodCategories searchParams={searchParams} />
        <Foods />
      </section>
      <section>
        <ImageGallery />
      </section>
    </main>
  )
}
