import { Image } from "react-grid-gallery";
export interface CustomImage extends Image {
    original: "",
}

export const images = [

    {
        id: 0,
        src: "https://i.ibb.co/M6dyLQn/gallery-1.jpg",
        original: "https://i.ibb.co/M6dyLQn/gallery-1.jpg",
        width: 346,
        height: 345,
        caption: "Our Best Fish Item",
        classes: "col-span-9 sm:col-span-5 lg:col-span-3"
    },
    {
        id: 1,
        src: "https://i.ibb.co/GkVDfgQ/gallery-2.jpg",
        original: "https://i.ibb.co/GkVDfgQ/gallery-2.jpg",
        width: 520,
        height: 345,
        caption: "Extraordinary Salad",
        classes: "col-span-9 sm:col-span-4 lg:col-span-4"

    },
    {
        id: 2,
        src: "https://i.ibb.co/hd6tsPC/gallery-3.jpg",
        original: "https://i.ibb.co/hd6tsPC/gallery-3.jpg",
        width: 232,
        height: 345,
        caption: "Gorgeous View Form Window",
        classes: "col-span-9 sm:col-span-4 lg:col-span-2"

    },
    {
        id: 3,
        src: "https://i.ibb.co/g3KJNCq/gallery-4.jpg",
        original: "https://i.ibb.co/g3KJNCq/gallery-4.jpg",
        alt: "Big Ben - London",
        width: 520,
        height: 345,
        caption: "Famous For Party Center",
        classes: "col-span-9 sm:col-span-5 lg:col-span-4"

    },
    {
        id: 4,
        src: "https://i.ibb.co/Wvc9dmX/gallery-5.jpg",
        original: "https://i.ibb.co/Wvc9dmX/gallery-5.jpg",
        alt: "Red Zone - Paris",
        width: 232,
        height: 345,
        caption: "Special & secret Dish",
        classes: "col-span-9 sm:col-span-5 lg:col-span-2"

    },

    {
        id: 5,
        src: "https://i.ibb.co/dJNcftv/gallery-6.jpg",
        original: "https://i.ibb.co/dJNcftv/gallery-6.jpg",
        alt: "Wood Glass",
        width: 346,
        height: 345,
        caption: "Peaceful Night View of our Restaurant",
        classes: "col-span-9 sm:col-span-4 lg:col-span-3"
    },

];
