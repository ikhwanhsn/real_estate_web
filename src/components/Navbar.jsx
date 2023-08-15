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
        <div className="z-20 items-center block w-full h-5 p-3 mt-0 text-white md:w-5/6 md:flex md:justify-between md:p-8 sm:text-xs md:text-lg md:mt-5">
            <div className="flex">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <span class="material-symbols-outlined me-2 md:me-5 cursor-pointer">apartment</span>
                <a href="/">
                    <h1 id="brand">Real Estate App</h1>
                </a>
            </div>
            <div className="items-center hidden opacity-50 md:flex">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <span class="material-symbols-outlined cursor-pointer">search</span>
                <input type="search" placeholder="Search" className="px-2 py-1 bg-transparent placeholder:text-white md:w-32"/>
            </div>
            <ul className="hidden md:flex">
                <li><a href="#about" className="transition-all hover:text-gray-300 me-7">About</a></li>
                <li><a href="#services" className="transition-all hover:text-gray-300 me-7">Services</a></li>
                <li><a href="#reviews" className="transition-all hover:text-gray-300 me-7">Reviews</a></li>
                <li><a href="#contacts" className="transition-all hover:text-gray-300 me-7">Contacts</a></li>
            </ul>
            <a href="#footer" className="hidden transition-all hover:text-gray-300 md:block">
                <p>Get In Touch</p>
            </a>
            <div className="static float-right -mt-6 cursor-pointer hamburger md:hidden" onClick={buttonActiveNav}>
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className={navActive? "h-100 md:hidden fixed z-40 bg-white shadow-lg top-0 left-0 justify-center text-center leading-loose text-gray-800 w-full text-lg" : "h-100 md:hidden hidden z-40 bg-white shadow-lg top-0 left-0 justify-center text-center leading-loose text-gray-800 w-full text-lg"}>
                <div className="mx-auto">
                    <span class="material-symbols-outlined absolute right-3 top-3" onClick={buttonCloseNav}>close</span>
                    <ul className="my-12">
                        <li><a href="#about" className="transition-all hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="transition-all hover:text-gray-300">Services</a></li>
                        <li><a href="#reviews" className="transition-all hover:text-gray-300">Reviews</a></li>
                        <li><a href="#contacts" className="transition-all hover:text-gray-300">Contacts</a></li>
                        <li><a href="#contacts" className="transition-all hover:text-gray-300"><p>Get In Touch</p></a></li>
                        <li>
                            <div className="flex items-center justify-center mx-auto mt-5 opacity-50">
                                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <span class="material-symbols-outlined cursor-pointer me-3">search</span>
                                <input type="search" placeholder="Search" className="px-2 py-1 bg-transparent border border-black rounded-md placeholder:text-white md:w-32"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;