const ImageGallery = ({src}) => {
    return ( 
        <img src={src} alt="Gallery" className="snap-center rounded-md shadow-md mx-auto w-56 md:w-48 h-56 md:h-48"/>
     );
}
 
export default ImageGallery;