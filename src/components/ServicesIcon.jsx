const ServicesIcon = ({children, src, alt}) => {
    return ( 
        <div class="">
            <img src={src} alt={alt} className="hover:scale-110 transition-all w-20 h-20 md:w-40 md:h-40"/>
            <p className="-mt-5 md:-mt-10 text-gray-600 text-xs md:text-base">{children}</p>
        </div>
     );
}
 
export default ServicesIcon;