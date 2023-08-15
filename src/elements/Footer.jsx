const Footer = () => {
    return ( 
        <div id="footer" className="flex md:flex-row flex-col justify-between mt-24 p-12 pr-3 bg-white w-full text-gray-700 gap-12">
            <div className="basis-3/6 pr-12">
                <div className="flex mb-5">
                    <span class="material-symbols-outlined me-5 cursor-pointer">apartment</span>
                    <h2 className="font-bold text-lg">Real Estate</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non autem velit officiis maiores est sed ullam perspiciatis deleniti doloremque dignissimos ipsam necessitatibus, corrupti quia voluptates excepturi cumque error accusantium vero ducimus impedit harum tempore. Created by <a href="" className="text-blue-800 hover:underline font-bold">Ikhwan Dev</a>, design by <a href="https://www.spline.one/" className="text-blue-800 hover:underline font-bold">Spline.one</a></p>
                <div className="medsos mt-4 flex gap-5">
                    <a href="" className="bg-blue-500 hover:bg-blue-600 p-3.5 rounded-full w-10 h-10">
                        <img src="/public/img/facebook.svg" alt="facebook" className="-mt-1"/>
                    </a>
                    <a href="" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full w-10 h-10">
                        <img src="/public/img/twitter.svg" alt="twitter" width="25px"/>
                    </a>
                    <a href="" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full w-10 h-10">
                        <img src="/public/img/youtube.svg" alt="youtube" width="25px"/>
                    </a>
                </div>
            </div>
            <div className="grid-cols-2 grid md:flex gap-5 basis-2/6">
                <div className="our-product basis-4/6">
                    <h2 className="font-bold text-lg mb-4">Our Product</h2>
                    <ul className="leading-loose">
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>House</li>
                        </a>
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Appartament</li>
                        </a>
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Office</li>
                        </a>
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Warehouse</li>
                        </a>
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Parking</li>
                        </a>
                    </ul>
                </div>
                <div className="pages basis-3/6">
                    <h2 className="font-bold text-lg mb-4">Pages</h2>
                    <ul className="leading-loose">
                        <a href="#go-top" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Header</li>
                        </a>
                        <a href="#about" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Our Story</li>
                        </a>
                        <a href="#services" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Services</li>
                        </a>
                        <a href="#deals" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Deals</li>
                        </a>
                        <a href="#gallery" className="hover:underline hover:text-blue-700 transition-all">
                            <li>Gallery</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="contact basis-2/6">
                <h2 className="font-bold text-lg mb-4">Contact</h2>
                <ul className="leading-loose">
                    <a href="#" className="hover:underline hover:text-blue-700 transition-all flex items-center gap-2">
                        <span class="material-symbols-outlined">call</span>
                        <li>(205) 555-01000</li>
                    </a>
                    <a href="#" className="hover:underline hover:text-blue-700 transition-all flex items-center gap-2">
                        <span class="material-symbols-outlined">schedule</span>
                        <li>Mon - Fri : 9 am- 11 pm</li>
                    </a>
                    <a href="#" className="hover:underline hover:text-blue-700 transition-all  flex items-center gap-2">
                        <span class="material-symbols-outlined">mail</span>
                        <li>realestate.yahoo.com</li>
                    </a>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;