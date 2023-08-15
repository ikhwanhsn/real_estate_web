const OurStoryCard = ({h3, p}) => {
    return ( 
        <div class="w-80 md:w-64 rounded-md shadow-sm bg-white h-auto p-9 pb-12 mx-auto md:mx-0 mb-3 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">{h3}</h3>
            <p>{p}</p>
        </div>
     );
}
 
export default OurStoryCard;