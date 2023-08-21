import Button from '../Button/Button';
const Banner = ({ imgName }: { imgName: string }) => {
  return (
    <>
      <div className={`bg-[url('/assets/images/home-banner.jpg')] h-screen w-full flex items-center justify-center z-[10] 
    border-8 border-primary-yellow`}>
        <div className="container mx-auto px-4 md:px-8 z-[999]">

          <div className="text-center text-white">
            <h3>  MORE FLAVOR FOR LESS </h3>
            <h2>  Taste The
              Difference
            </h2>
            <p> When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our mea </p>
            <Button title='our menus' />
          </div>
        </div>
      </div>
      <div className={`h-screen bg-black/40 absolute top-0  left-0 w-full z-[99]`} />
    </>
  )
}

export default Banner;