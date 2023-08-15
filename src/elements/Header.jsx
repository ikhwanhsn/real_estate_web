import ButtonRealEstate from "../components/ButtonRealEstate";
import Navbar from "../components/Navbar";
import background from '../../public/img/background.png';

const Header = () => {
    return ( 
        <div className="flex flex-col items-center justify-center w-full" id="go-top">
            <img src={background} alt="background" className="absolute top-0"/>
            <Navbar/>
            <div className="z-10 w-full -mt-2 text-center scale-50  md:scale-100 md:mt-24">
                <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-white bg-orange-500 text-xs"}>REAL ESTATE</ButtonRealEstate>
                <h1 className="mx-auto mt-10 text-4xl text-white md:text-6xl w-7/8 md:w-3/5">Invest on Real Estate with Our Company</h1>
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
            <a href="#about" className="z-10 px-4 py-3 mt-5 text-xs font-bold text-blue-900 transition-all scale-50 bg-white rounded-full md:scale-100 md:mt-48 hover:bg-gray-100">
                <button className="">Show More</button>
            </a>
        </div>
     );
}
 
export default Header;