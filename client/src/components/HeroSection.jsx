import { ArrowRight, CalendarIcon } from 'lucide-react';
import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';  

const HeroSection = () => {
    const navigate=useNavigate()
    return (
    
    <div className="w-full bg-black text-white px-6 md:px-16 lg:px-24 pt-4 pb-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center h-[90vh]">

        {/* LEFT: Logo + Text */}
        <div className="max-w-lg flex flex-col justify-center h-full">
          
          
          <img
            src={assets.movieLogo}
            alt="logo"
            className="w-36 h-auto object-contain mb-1"
          />
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Where the golden age <br /> of films lives on...
          </h1>

          {/* Genres and Era */}
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>Action | Romance | Drama | and many more...</span>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" /> 1960s–1990s
            </div> 
          </div>
          <button onClick={()=> navigate('/movies')} className='mt-6 mb-2 px-5 py-2.5 text-sm bg-primary
      hover: bg-primary-dull transition rounded-full font-medium flex items-center gap-2 w-fit'>
        Explore Movies
        <ArrowRight className='w-4 h-4' />
      </button>
        </div>
        <div className="flex-1 flex justify-end items-end h-full pt-6 w-66 group">
          <BlurCircle top='0' right='-80px'/>
          <img
            src="/backgroundImage.jpg"
            alt="Bollywood Poster"
            className="h-[91%] object-contain rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-102"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;