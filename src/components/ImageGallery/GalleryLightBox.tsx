import Titles from "../shared/Titles/Titles";
import GalleryImages from "./GalleryImages";
import { images } from "./images";

const GalleryLightBox = () => {

    return (
        <div className="">
            <Titles smTitle="follow along" title="@Siddik" />
            <div className="lg:container mx-auto px-5 sm:px-20 lg:px-36 py-8 sm:py-12 lg:py-18">
                <GalleryImages
                    galleryID="restaurant-gallery"
                    images={images}
                />

            </div>
        </div>
    );
}
export default GalleryLightBox;