import Button from '../Button/Button';
const Banner = ({ imgName, showDes }: { imgName: string, showDes: boolean }) => {
  return (
    <>
      <div className={`${imgName} h-screen w-full flex items-center justify-center  bg-no-repeat bg-cover bg-center
    `}>

        <div className="container mx-auto px-6 md:px-10 z-[999]">

          <div className="text-center text-white mx-auto">
            <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]'>  MORE FLAVOR FOR LESS </h3>
            <h2 className='mx-auto uppercase drop-shadow-lg shadow-black text-3xl md:text-5xl xl:text-7xl font-bold mb-3 md:mb-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>  Taste The
              Difference
            </h2>
            {
              showDes ? (<p className='text-sm lg:text-base mx-auto tracking-wide w-full md:max-w-[70%] lg:max-w-[65%] xl:max-w-[35%]'> When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our mea </p>) : null
            }

            <Button title='our menus' />
          </div>
        </div>
      </div>
      <div className={`border-8 border-primary-yellow h-screen bg-black/30 absolute top-0  left-0 right-0 mx-auto w-full z-[99]`} />
    </>
  )
}

export default Banner;