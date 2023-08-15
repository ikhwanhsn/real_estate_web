import ButtonRealEstate from "../components/ButtonRealEstate";
import ReviewsCard from "../components/ReviewsCard";
import TitleElement from "../components/TitleElements";
import profil1 from '../../public/img/Profil-1.png';
import profil2 from '../../public/img/Profil-2.png';
import profil3 from '../../public/img/Profil-3.png';

const Reviews = () => {
    return ( 
        <div className="relative w-full pt-8 mt-16 text-center" id="reviews">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20 tracking-widest">REVIEWS</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-blue-600 bg-blue-200 text-xs "}>REVIEWS</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-10 md:mt-20 text-md md:text-4xl mb-12 md:mb-24 font-bold text-gray-700"}>Prioritize Customer Satisfaction</TitleElement>
          <p class="w-4/6 mx-auto text-gray-500 leading-loose text-xs md:text-base">
          With many customers in different countries and each having different interests, we adapted that well. We try to provide the best service and try to make everyone comfortable with us.
          </p>
          <div class="snap-x snap-mandatory flex md:px-0 pb-7 md:pb-0 px-12 overflow-scroll md:justify-center mt-12 md:mt-16 gap-7">
                <ReviewsCard 
                src={profil1}
                p={"Thank you very much for the house found. This is an ideal option for our family at the location and price. The company employs real professionals who will always"}
                name={'Herbert Lindsey'}
                place={'New York, USA'}/>
                <ReviewsCard 
                src={profil2}
                p={"A gentleman from New York discovered what he calls an “oversight” on the part of 99.9% of all marketers that allows him to get otherwise paid-for advertising at Google as well as all other search engines."}
                name={'Noah Russell'}
                place={'New York, USA'}/>
                <ReviewsCard 
                src={profil3}
                p={"For many of us, our very first experience of learning about the celestial bodies begins when we saw our first full moon in the sky. It is truly a magnificent view even"}
                name={'Nellie Griffith'}
                place={'New York, USA'}/>
            </div>
        </div>
        </div>
      </div>
     );
}
 
export default Reviews;