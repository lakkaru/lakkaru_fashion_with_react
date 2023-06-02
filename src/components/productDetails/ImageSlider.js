// import Swiper core and required modules
import { Zoom, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import SingleImage from "./imageSlider/SingleImage";

export default function ImageSlider({images}) {
  
  return (
    
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#6a5acd",
        }}
        
        // navigation={true}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((val, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="swiper-zoom-container">
                <SingleImage image={val} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
  
  );
}
