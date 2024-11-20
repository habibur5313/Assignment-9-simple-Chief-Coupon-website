import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { AuthContext } from '../../Context/AuthProvider';

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
const {user} = useContext(AuthContext)
  return (
    <>
{user && <h1 className='text-3xl mt-5 font-semibold text-purple-700 text-center'>Hello {user.displayName},Welcome To dashboard</h1>}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  mt-10"
      >
        <SwiperSlide>
          <img className='w-full max-h-[700px] rounded-xl' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full max-h-[700px] rounded-xl' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full max-h-[700px] rounded-xl' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full max-h-[700px] rounded-xl' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        
      </Swiper>
      <Swiper 
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-lg mx-auto md:absolute mt-4 md:-top-36"
      >

        <SwiperSlide>
          <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-xl' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}