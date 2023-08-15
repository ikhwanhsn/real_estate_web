const ReviewsCard = ({p, src, name, place}) => {
    return ( 
        <div className="snap-center mx-auto md:mx-0">
            <div class="w-64 h-52 rounded-md shadow-sm bg-white h-auto p-7 text-gray-600 text-left text-sm">
                <p>{p}</p>
            </div>
            <div className="flex mt-4 gap-5">
                <img src={src} alt="Profile" className="rounded-full bg-white"/>
                <div className="text-left">
                    <h3>{name}</h3>
                    <p>{place}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReviewsCard;