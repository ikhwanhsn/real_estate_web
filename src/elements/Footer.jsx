import facebook from '../../public/img/facebook.svg';
import twitter from '../../public/img/twitter.svg';
import youtube from '../../public/img/youtube.svg';

const Footer = () => {
    return ( 
        <div id="footer" className="flex flex-col justify-between w-full gap-12 p-12 pr-3 mt-24 text-gray-700 bg-white md:flex-row">
            <div className="pr-12 basis-3/6">
                <div className="flex mb-5">
                    <span class="material-symbols-outlined me-5 cursor-pointer">apartment</span>
                    <h2 className="text-lg font-bold">Real Estate</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non autem velit officiis maiores est sed ullam perspiciatis deleniti doloremque dignissimos ipsam necessitatibus, corrupti quia voluptates excepturi cumque error accusantium vero ducimus impedit harum tempore. Created by <a href="" className="font-bold text-blue-800 hover:underline">Ikhwan Dev</a>, design by <a href="https://www.spline.one/" className="font-bold text-blue-800 hover:underline">Spline.one</a></p>
                <div className="flex gap-5 mt-4 medsos">
                    <a href="" className="bg-blue-500 hover:bg-blue-600 p-3.5 rounded-full w-10 h-10">
                        <img src={facebook} alt="facebook" className="-mt-1"/>
                    </a>
                    <a href="" className="w-10 h-10 p-3 bg-blue-500 rounded-full hover:bg-blue-600">
                        <img src={twitter} alt="twitter" width="25px"/>
                    </a>
                    <a href="" className="w-10 h-10 p-3 bg-blue-500 rounded-full hover:bg-blue-600">
                        <img src={youtube} alt="youtube" width="25px"/>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:flex basis-2/6">
                <div className="our-product basis-4/6">
                    <h2 className="mb-4 text-lg font-bold">Our Product</h2>
                    <ul className="leading-loose">
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>House</li>
                        </a>
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>Appartament</li>
                        </a>
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>Office</li>
                        </a>
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>Warehouse</li>
                        </a>
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>Parking</li>
                        </a>
                    </ul>
                </div>
                <div className="pages basis-3/6">
                    <h2 className="mb-4 text-lg font-bold">Pages</h2>
                    <ul className="leading-loose">
                        <a href="#go-top" className="transition-all hover:underline hover:text-blue-700">
                            <li>Header</li>
                        </a>
                        <a href="#about" className="transition-all hover:underline hover:text-blue-700">
                            <li>Our Story</li>
                        </a>
                        <a href="#services" className="transition-all hover:underline hover:text-blue-700">
                            <li>Services</li>
                        </a>
                        <a href="#deals" className="transition-all hover:underline hover:text-blue-700">
                            <li>Deals</li>
                        </a>
                        <a href="#gallery" className="transition-all hover:underline hover:text-blue-700">
                            <li>Gallery</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="contact basis-2/6">
                <h2 className="mb-4 text-lg font-bold">Contact</h2>
                <ul className="leading-loose">
                    <a href="#" className="flex items-center gap-2 transition-all hover:underline hover:text-blue-700">
                        <span class="material-symbols-outlined">call</span>
                        <li>(205) 555-01000</li>
                    </a>
                    <a href="#" className="flex items-center gap-2 transition-all hover:underline hover:text-blue-700">
                        <span class="material-symbols-outlined">schedule</span>
                        <li>Mon - Fri : 9 am- 11 pm</li>
                    </a>
                    <a href="#" className="flex items-center gap-2 transition-all hover:underline hover:text-blue-700">
                        <span class="material-symbols-outlined">mail</span>
                        <li>realestate.yahoo.com</li>
                    </a>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;