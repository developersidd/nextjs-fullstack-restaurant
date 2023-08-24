import AboutComp from "@/components/About/About";
import Recommendation from "@/components/Recommendation/Recommendation";
import Banner from "@/components/shared/Banner/Banner";

export default function Home() {
  return (
    <main className="font-montserrat">
      <Banner imgName="bg-[url('../assets/images/home-banner.jpg')]" />
      <AboutComp />
      <Recommendation />
    </main>
  )
}
