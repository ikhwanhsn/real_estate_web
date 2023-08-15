import { useState } from "react";
import ButtonRealEstate from "../components/ButtonRealEstate";
import TitleElement from "../components/TitleElements";
import DealsCard from "../components/DealsCard";

const Deals = () => {
    const dataImage = [
        {
            src: '/public/img/Image-deals-1.png',
            h3: 'Modern Glass House',
            price: '$ 1,625,000',
            place: '14 Patrick Brem Ct. Mahwah, NJ07430',
            room: '3 Beds  -  2 baths  -  3,450 sqft'
        },
        {
            src: '/public/img/Image-deals-2.png',
            h3: 'Modern Glass House',
            price: '$ 1,625,000',
            place: '9832 Hidden Valley Way',
            room: '2 Beds - 1 baths - 2,300 sqft'
        },
        {
            src: '/public/img/Image-deals-3.png',
            h3: 'Modern House',
            price: '$ 1,950,000',
            place: '12 Sillicon Valey, NJ34623',
            room: '5 Beds  -  2 baths  -  4,500 sqft'
        },
        {
            src: '/public/img/Image-deals-4.png',
            h3: 'House on the Lake',
            price: '$ 225,000',
            place: '14 Patrick Brem Ct. Mahwah, NJ07430',
            room: '3 Beds - 2 baths - 3,450 sqft'
        },
        {
            src: '/public/img/Image-deals-5.png',
            h3: 'Townhouse in the center',
            price: '$ 400,000',
            place: '9832 Hidden Valley Way',
            room: '2 Beds - 1 baths - 2,300 sqft'
        },
        {
            src: '/public/img/Image-deals-6.png',
            h3: 'Flat in Center City',
            price: '$ 225,000',
            place: '12 Sillicon Valey, NJ34623',
            room: '5 Beds  -  2 baths  -  4,500 sqft'
        },
        {
            src: '/public/img/Image-deals-7.png',
            h3: 'Townhouse in the center',
            price: '$ 1,950,000',
            place: '12 Sillicon Valey, NJ34623',
            room: '5 Beds  -  2 baths  -  4,500 sqft'
        },
        {
            src: '/public/img/Image-deals-8.png',
            h3: 'Flat in Center City',
            price: '$ 1,950,000',
            place: '12 Sillicon Valey, NJ34623',
            room: '5 Beds  -  2 baths  -  4,500 sqft'
        },
        {
            src: '/public/img/Image-deals-9.png',
            h3: 'Modern Glass House',
            price: '$ 1,950,000',
            place: '12 Sillicon Valey, NJ34623',
            room: '5 Beds  -  2 baths  -  4,500 sqft'
        },
    ]

    return ( 
        <div className="relative w-full pt-8 mt-12 text-center" id="deals">
        <h2 class="text-5xl md:text-9xl font-bold text-gray-200 absolute w-full right-0 top-24 tracking-widest">DEALS</h2>
        <div class="our-story mx-auto relative">
        <ButtonRealEstate className={"px-3 py-2 font-bold rounded-full text-red-500 bg-red-200 text-xs "}>DEALS</ButtonRealEstate>
        <div className="">
          <TitleElement className={"mt-14 md:mt-20 text-md md:text-4xl mb-12 md:mb-24 font-bold text-gray-700"}>Our Best Deals for Today</TitleElement>
          <p class="w-4/6 mx-auto text-gray-500 leading-loose text-xs md:text-base">
          Real estate is "property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water, immovable property of this nature.
          </p>
          <div className="flex flex-col items-start justify-start px-12 mt-12 overflow-scroll deals-image snap-x snap-mandatory md:overflow-hidden md:items-center md:justify-center md:px-0">
            <div className="title-deals-image">
                <ul className="absolute grid grid-cols-3 gap-1 font-semibold text-gray-600 cursor-pointer md:static md:flex md:gap-12">
                    <li className="transition-all hover:text-red-500" onClick="">House</li>
                    <li className="transition-all hover:text-red-500" onClick="">Appartament</li>
                    <li className="transition-all hover:text-red-500" onClick="">Office</li>
                    <li className="transition-all hover:text-red-500" onClick="">Warehouse</li>
                    <li className="transition-all hover:text-red-500" onClick="">Parking</li>
                    <li className="transition-all hover:text-red-500" onClick="">Commercial</li>
                </ul>
            </div>
            <div className="flex grid-flow-col grid-rows-3 mt-24 gallery-image md:mt-12 md:grid gap-7">
                {dataImage.map((item) => (
                    <DealsCard 
                    src={item.src} 
                    h3={item.h3} 
                    price={item.price} 
                    place={item.place} 
                    room={item.room}/>
                ))}
            </div>
          </div>
        </div>
        </div>
      </div>
     );
}
 
export default Deals;