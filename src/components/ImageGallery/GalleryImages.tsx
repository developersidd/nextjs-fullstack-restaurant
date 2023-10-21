"use client";
import Image from 'next/image';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from 'react';

const GalleryImages = (props: any) => {
    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox?.destroy();
            lightbox = null;
        };
    }, []);

    return (

        <div className="grid grid-cols-9  gap-x-5 gap-y-8" id={props.galleryID}>
            {props.images.map(({ caption, width, height, classes, src }: any, index: any) => (
                <a
                    href={src}
                    className={`${classes}  cursor-pointer group/gallery overflow-hidden rounded-md`} key={props.galleryID + '-' + index}
                    target="_blank"
                    rel="noreferrer"
                    data-pswp-width={width}
                    data-pswp-height={height}
                >
                    <div className='h-[260px] sm:h-[290px] md:h-[320px] lg:h-[350px] '>

                        <Image className={` object-fill w-full h-full rounded-md duration-300 transition-transform group-hover/gallery:scale-110`} src={src} width={1800} height={1500} alt={caption} />
                    </div>
                </a>

            ))}
        </div>
    );
}
export default GalleryImages;