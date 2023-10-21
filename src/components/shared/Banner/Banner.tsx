const Banner = ({ imgName, children, smTitle, title }: { imgName: string, children?: React.ReactNode, smTitle: string, title: string }) => {
  return (
    <>
      <div className={`${imgName} h-screen w-full flex items-center justify-center  bg-no-repeat bg-cover bg-center
    `}>
        <div className="container mx-auto px-6 md:px-10 z-[999]">

          <div className="text-center text-white mx-auto">
            <h3 className='uppercase lg:text-lg mb-2 md:mb-4 tracking-[3px]' data-aos="fade-left" data-aos-delay="70"> {smTitle} </h3>
            <h2 className='mx-auto uppercase drop-shadow-lg shadow-black text-3xl md:text-5xl xl:text-7xl 
            font-bold mb-3 md:mb-4  w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[50%] 
            ' data-aos="fade-up" > {title}
            </h2>
            {children}
          </div>
        </div>
      </div>
      <div className={`border-8 border-sandy-brown h-screen bg-black/25 absolute top-0  left-0 right-0 mx-auto w-full z-[99]`} />
    </>
  )
}

export default Banner;