const ReviewsCard = ({p, src, name, place}) => {
    return ( 
        <div className="mx-auto snap-center md:mx-0">
            <div class="w-64 h-52 rounded-md shadow-sm bg-white p-7 text-gray-600 text-left text-sm">
                <p>{p}</p>
            </div>
            <div className="flex gap-5 mt-4">
                <img src={src} alt="Profile" className="bg-white rounded-full"/>
                <div className="text-left">
                    <h3>{name}</h3>
                    <p>{place}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReviewsCard;