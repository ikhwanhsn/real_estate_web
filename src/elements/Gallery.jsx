import ButtonRealEstate from "../components/ButtonRealEstate";
import ImageGallery from "../components/ImageGallery";
import TitleElement from "../components/TitleElements";
import gallery1 from '../../public/img/Gallery-1.png';
import gallery2 from '../../public/img/Gallery-2.png';
import gallery3 from '../../public/img/Gallery-3.png';
import gallery4 from '../../public/img/Gallery-4.png';
import gallery5 from '../../public/img/Gallery-5.png';
import gallery6 from '../../public/img/Gallery-6.png';
import gallery7 from '../../public/img/Gallery-7.png';
import gallery8 from '../../public/img/Gallery-8.png';

const Gallery = () => {
    const allImage = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
    ]

    return ( 
        <div className="relative w-full pt-8 mt-24 text-center" id="gallery">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20 tracking-widest">GALLERY</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-blue-600 bg-blue-200 text-xs "}>GALLERY</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-10 md:mt-20 text-md md:text-4xl mb-12 md:mb-24 font-bold text-gray-700"}>Interesting View Gallery</TitleElement>
          <div className="flex grid-cols-4 gap-3 px-8 mx-auto overflow-scroll cursor-pointer snap-x snap-mandatory md:grid md:px-0 w-100 md:w-2/3">
            {allImage.map((item) => (
                <ImageGallery src={item}/>
            ))}
          </div>
        </div>
        </div>
      </div>
     );
}
 
export default Gallery;