import Image from "next/image"

const SingleImage = ({ img: { src, caption, classes, width, height, id }, setIndex }: any) => {
    return (
        <div data-aos="fade-up" data-aos-delay={(id + 1) * 200} className={`${classes} h-[220px] sm:h-[240px] md:h-[280px] lg:h-[330px] relative cursor-pointer group/gallery overflow-hidden`} onClick={setIndex}>
            <Image className={` object-fill rounded-md duration-300 transition-transform group-hover/gallery:scale-110`} src={src} layout="fill" alt={caption} />
        </div>
    )
}

export default SingleImage