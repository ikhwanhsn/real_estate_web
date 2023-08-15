const DealsCard = ({src, h3, price, place, room}) => {
    return ( 
        <div className="snap-center w-64 mb-5 shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all">
            <img src={src} alt="Image" />
            <div className="desc p-5 text-left text-gray-600">
                <h3 className="font-bold mt-2">{h3}</h3>
                <p className="mt-3 font-semibold">{price}</p>
                <p className="mt-3 text-xs">{place}</p>
                <p className="mt-2 text-xs">{room}</p>
            </div>
        </div>
     );
}
 
export default DealsCard;