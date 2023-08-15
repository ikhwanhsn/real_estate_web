import ButtonRealEstate from "../components/ButtonRealEstate";
import OurStoryCard from "../components/OurStoryCard";
import TitleElement from "../components/TitleElements";

const OurStory = () => {
    return ( 
        <div className="w-full text-center mt-16 relative pt-8" id="about">
              <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20">OUR STORY</h2>
            <div class="our-story mx-auto relative">
              <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-green-600 bg-green-200 text-xs"}>OUR STORY</ButtonRealEstate>
              <div className="">
                <TitleElement className={"mt-10 md:mt-20 text-md md:text-4xl mb-8 md:mb-24 font-bold text-gray-700"}>We Will Find the Best Option</TitleElement>
                <p class="w-4/6 mx-auto text-gray-500 leading-loose md:text-base text-xs">
                  Real estate is "property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water, immovable property of this nature; an interest vested in this (also) an item of real
                  property, (more generally) buildings or housing in general.
                </p>
                <div class="md:flex block justify-center mt-8 md:mt-16 gap-7">
                  <OurStoryCard h3={"15 Years"} p={"In Business"}/>
                  <OurStoryCard h3={"$1 Billion"} p={"Property Brokered"}/>
                  <OurStoryCard h3={"10,000"} p={"Transaction"}/>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default OurStory;