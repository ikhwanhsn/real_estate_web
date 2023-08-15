import ButtonRealEstate from "../components/ButtonRealEstate";
import ImageGallery from "../components/ImageGallery";
import TitleElement from "../components/TitleElements";

const Gallery = () => {
    const allImage = [
        '/public/img/Gallery-1.png',
        '/public/img/Gallery-2.png',
        '/public/img/Gallery-3.png',
        '/public/img/Gallery-4.png',
        '/public/img/Gallery-5.png',
        '/public/img/Gallery-6.png',
        '/public/img/Gallery-7.png',
        '/public/img/Gallery-8.png',
    ]

    return ( 
        <div className="w-full text-center mt-24 relative pt-8" id="gallery">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20 tracking-widest">GALLERY</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-blue-600 bg-blue-200 text-xs "}>GALLERY</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-10 md:mt-20 text-md md:text-4xl mb-12 md:mb-24 font-bold text-gray-700"}>Interesting View Gallery</TitleElement>
          <div className="snap-x snap-mandatory flex md:grid grid-cols-4 overflow-scroll gap-3 px-8 md:px-0 w-100 md:w-2/3 mx-auto cursor-pointer">
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