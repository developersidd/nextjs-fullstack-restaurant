"use client";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Titles from "../shared/Titles/Titles";
import SingleImage from "./SingleImage";
import { CustomImage, images } from "./images";

const ImageGallery = () => {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    console.log("nextIndex:", nextIndex)
    const nextImage = images[nextIndex] || currentImage;
    console.log("nextImage:", nextImage)
    const prevIndex = (index + images.length - 1) % images.length;
    console.log("prevIndex:", prevIndex)
    const prevImage = images[prevIndex] || currentImage;
    console.log("prevImage:", prevImage)

    const handleClick = (index: number, item?: CustomImage) => {
        console.log("index:", index)
        setIndex(index);
    }
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return (
        <div className="">
            <Titles smTitle="follow along" title="@Siddik" />
            <div className="lg:container mx-auto px-5 sm:px-20 lg:px-36 py-8 sm:py-12 lg:py-18">
                <div id="image-gallery" className="grid grid-cols-9  gap-x-5 gap-y-8">
                    {

                        images?.map(img => (
                            <>
                                <SingleImage setIndex={() => handleClick(img.id)} key={img.id} img={img} />
                                {!!currentImage && (
                                    /* @ts-ignore */
                                    <Lightbox
                                        mainSrc={currentImage.original}
                                        imageTitle={currentImage.caption}
                                        mainSrcThumbnail={currentImage.src}
                                        nextSrc={nextImage.original}
                                        nextSrcThumbnail={nextImage.src}
                                        prevSrc={prevImage.original}
                                        prevSrcThumbnail={prevImage.src}
                                        onCloseRequest={handleClose}
                                        onMovePrevRequest={handleMovePrev}
                                        onMoveNextRequest={handleMoveNext}
                                    />
                                )}

                            </>
                        ))
                    }

                </div>

            </div>
        </div>
    );
}
export default ImageGallery;