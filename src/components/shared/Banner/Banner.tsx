import Titles from '../Titles/Titles';
const Banner = ({ imgName }: { imgName: string, }) => {
  return (
    <>
      <div className={`${imgName} h-screen w-full flex items-center justify-center  bg-no-repeat bg-cover bg-center
    `}>

        <div className="container mx-auto px-6 md:px-10 z-[999]">
          <Titles
            title="Taste The Difference"
            smTitle="MORE FLAVOR FOR LESS"
            des="When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat."
            showDes={true}
          />
        </div>
      </div>
      <div className={`border-8 border-primary-yellow h-screen bg-black/30 absolute top-0  left-0 right-0 mx-auto w-full z-[99]`} />
    </>
  )
}

export default Banner;