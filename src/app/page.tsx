import AboutComp from "@/components/About/About";
import Banner from "@/components/shared/Banner/Banner";

export default function Home() {
  return (
    <main className="font-montserrat">
      <Banner showDes={true} imgName="bg-[url('../assets/images/home-banner.jpg')]" />
      <AboutComp />
    </main>
  )
}
