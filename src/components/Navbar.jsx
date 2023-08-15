import { useState } from "react";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const buttonActiveNav = () => {
        setNavActive(true);
    }

    const buttonCloseNav = () => {
        setNavActive(false);
    }

    return ( 
        <div className="w-full md:w-5/6 md:flex block md:justify-between h-5 p-3 md:p-8 sm:text-xs md:text-lg items-center z-20 mt-0 md:mt-5 text-white">
            <div className="flex">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <span class="material-symbols-outlined me-2 md:me-5 cursor-pointer">apartment</span>
                <a href="/">
                    <h1 id="brand">Real Estate App</h1>
                </a>
            </div>
            <div className="hidden md:flex opacity-50 items-center">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <span class="material-symbols-outlined cursor-pointer">search</span>
                <input type="search" placeholder="Search" className="bg-transparent placeholder:text-white px-2 py-1 md:w-32"/>
            </div>
            <ul className="md:flex hidden">
                <li><a href="#about" className="hover:text-gray-300 transition-all me-7">About</a></li>
                <li><a href="#services" className="hover:text-gray-300 transition-all me-7">Services</a></li>
                <li><a href="#reviews" className="hover:text-gray-300 transition-all me-7">Reviews</a></li>
                <li><a href="#contacts" className="hover:text-gray-300 transition-all me-7">Contacts</a></li>
            </ul>
            <a href="#footer" className="hover:text-gray-300 transition-all hidden md:block">
                <p>Get In Touch</p>
            </a>
            <div className="hamburger static md:hidden float-right -mt-6 cursor-pointer" onClick={buttonActiveNav}>
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className={navActive? "h-100 md:hidden fixed z-40 bg-white shadow-lg top-0 left-0 justify-center text-center leading-loose text-gray-800 w-full text-lg" : "h-100 md:hidden hidden z-40 bg-white shadow-lg top-0 left-0 justify-center text-center leading-loose text-gray-800 w-full text-lg"}>
                <div className="mx-auto">
                    <span class="material-symbols-outlined absolute right-3 top-3" onClick={buttonCloseNav}>close</span>
                    <ul className="my-12">
                        <li><a href="#about" className="hover:text-gray-300 transition-all">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300 transition-all">Services</a></li>
                        <li><a href="#reviews" className="hover:text-gray-300 transition-all">Reviews</a></li>
                        <li><a href="#contacts" className="hover:text-gray-300 transition-all">Contacts</a></li>
                        <li><a href="#footer" className="hover:text-gray-300 transition-all"><p>Get In Touch</p></a></li>
                        <li>
                            <div className="flex opacity-50 items-center mx-auto justify-center mt-5">
                                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <span class="material-symbols-outlined cursor-pointer me-3">search</span>
                                <input type="search" placeholder="Search" className="bg-transparent placeholder:text-white px-2 py-1 md:w-32 border border-black rounded-md"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;