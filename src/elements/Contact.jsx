import ButtonRealEstate from "../components/ButtonRealEstate";
import InputContact from "../components/InputContact";
import ServicesIcon from "../components/ServicesIcon";
import TitleElement from "../components/TitleElements";

const Contact = () => {
    return ( 
        <div className="w-full text-center mt-24 relative pt-6" id="contacts">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-20">IN TOUCH</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-blue-600 bg-blue-200 text-xs "}>CONTACTS</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-12 md:mt-20 text-md md:text-4xl mb-12 font-bold text-gray-700"}>Get It Touch Now</TitleElement>
          <p class="w-4/6 mx-auto text-gray-500 leading-loose text-xs md:text-base">
          We have developed a unique space where you can work and create. We thought of everything to the smallest detail. You will be able to conduct your business, conduct meetings, meetings.
          </p>
          <div className="grid-cols-2 md:grid sm:block md:w-1/2 sm:w-full md:mb-0 mx-auto gap-7 mt-8">
            <InputContact 
            className={"px-5 py-3 w-80 shadow-md rounded-full pr-14 mb-2 md:mb-0"} 
            type={'text'} 
            icon={'account_circle'} 
            styleIcon={"material-symbols-outlined absolute right-10 top-3 md:right-3 text-gray-500"}
            containerStyle={"flex items-center justify-center relative"}
            placeholder={"First Name"}/>
            <InputContact 
            className={"px-5 py-3 w-80 shadow-md rounded-full pr-14 mb-2 md:mb-0"} 
            type={'text'} 
            icon={'account_circle'} 
            styleIcon={"material-symbols-outlined absolute right-10 top-3 md:right-3 text-gray-500"}
            containerStyle={"flex items-center justify-center relative"}
            placeholder={"Last Name"}/>
            <InputContact 
            className={"px-5 py-3 w-80 shadow-md rounded-full pr-14 mb-2 md:mb-0"} 
            type={'email'} 
            icon={'mail'} 
            styleIcon={"material-symbols-outlined absolute right-10 top-3 md:right-3 text-gray-500"}
            containerStyle={"flex items-center justify-center relative"}
            placeholder={"Email Address"}/>
            <InputContact 
            className={"px-5 py-3 w-80 shadow-md rounded-full pr-14 mb-2 md:mb-0"} 
            type={'text'} 
            icon={'call'} 
            styleIcon={"material-symbols-outlined absolute right-10 top-3 md:right-3 text-gray-500"}
            containerStyle={"flex items-center justify-center relative"}
            placeholder={"Phone Number"}/>
            <InputContact 
            className={"px-5 py-3 shadow-md rounded-full md:w-full w-80 pr-14 mb-2 md:mb-0"} 
            containerStyle={"flex items-center justify-center relative col-span-2"}
            type={'text'} 
            icon={'chat'} 
            styleIcon={"material-symbols-outlined absolute right-10 top-3 md:right-3 text-gray-500"}
            placeholder={"Your Message"}/>
          </div>
          <div className="mt-7">
          <ButtonRealEstate className={"px-5 py-3 font-bold hover:bg-blue-700 cursor-pointer transition-all mt-5 rounded-full text-white bg-blue-600 text-md "}>Send Request</ButtonRealEstate>
          </div>
        </div>
        </div>
      </div>
     );
}
 
export default Contact;