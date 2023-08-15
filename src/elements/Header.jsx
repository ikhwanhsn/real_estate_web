import ButtonRealEstate from "../components/ButtonRealEstate";
import Navbar from "../components/Navbar";

const Header = () => {
    return ( 
        <div className="w-full flex flex-col justify-center items-center" id="go-top">
            <img src="/public/img/background.png" alt="background" className="absolute top-0"/>
            <Navbar/>
            <div className=" w-full z-10 text-center -mt-2 md:scale-100 scale-50 md:mt-24">
                <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-white bg-orange-500 text-xs"}>REAL ESTATE</ButtonRealEstate>
                <h1 className="mt-10 text-4xl md:text-6xl text-white w-7/8 md:w-3/5 mx-auto">Invest on Real Estate with Our Company</h1>
            </div>
            <div class="z-10 flex text-white gap-3 md:gap-14 -mt-12 md:mt-16 md:text-lg text-xs scale-50 md:scale-100">
                <div className="flex gap-3">
                    <span class="material-symbols-outlined"> send </span>
                    <p>225 S 1st St Brooklyn, NY 11211</p>
                </div>
                <div className="flex gap-3">
                    <span class="material-symbols-outlined"> call </span>
                    <p>(929) 356-0147</p>
                </div>
                <div className="flex gap-3">
                    <span class="material-symbols-outlined"> mail </span>
                    <p>hotel@gmail.com</p>
                </div>
            </div>
            <a href="#about" className="z-10 mt-5 md:scale-100 scale-50 md:mt-48 px-4 py-3 rounded-full text-blue-900 bg-white text-xs hover:bg-gray-100 transition-all font-bold">
                <button className="">Show More</button>
            </a>
        </div>
     );
}
 
export default Header;