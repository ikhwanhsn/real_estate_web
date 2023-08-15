import ButtonRealEstate from "../components/ButtonRealEstate";
import ServicesIcon from "../components/ServicesIcon";
import TitleElement from "../components/TitleElements";
import house from '../../public/img/House.png';
import appartament from '../../public/img/Appartament.png';
import office from '../../public/img/Office.png';
import warehouse from '../../public/img/Warehouse.png';
import parking from '../../public/img/Parking.png';

const Services = () => {
    return ( 
      <div className="relative w-full pt-8 mt-24 text-center" id="services">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20 tracking-widest">SERVICES</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-blue-600 bg-blue-200 text-xs "}>SERVICES</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-10 md:mt-20 text-md md:text-4xl mb-8 md:mb-24 font-bold text-gray-700"}>Services for Maximum Efficiency</TitleElement>
          <p class="w-4/6 mx-auto text-gray-500 leading-loose text-xs md:text-base">
          We have developed a unique space where you can work and create. We thought of everything to the smallest detail. You will be able to conduct your business, conduct meetings, meetings.
          </p>
          <div class="flex justify-center mt-8 md:mt-16 gap-0">
            <ServicesIcon src={house} alt={"House"}>House</ServicesIcon>
            <ServicesIcon src={appartament} alt={"Appartament"}>Appartament</ServicesIcon>
            <ServicesIcon src={office} alt={"Office"}>Office</ServicesIcon>
            <ServicesIcon src={warehouse} alt={"Warehouse"}>Warehouse</ServicesIcon>
            <ServicesIcon src={parking} alt={"Parking"}>Parking</ServicesIcon>
          </div>
        </div>
        </div>
      </div>
     );
}
 
export default Services;