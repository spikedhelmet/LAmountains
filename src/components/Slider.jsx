// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import styles from "./Slider.module.css";

const SliderComponent = ({ isMobile }) => {
  const images = [
    "/assets/thumb1.jpg",
    "/assets/thumb2.jpg",
    "/assets/thumb1.jpg",
    "/assets/thumb2.jpg",
    "/assets/thumb1.jpg",
    "/assets/thumb2.jpg",
    "/assets/thumb1.jpg",
    "/assets/thumb2.jpg",
    "/assets/thumb1.jpg",
    "/assets/thumb2.jpg",
  ];

  return (
    <div className={styles.slider_container}>
      <Swiper
        slidesPerView={isMobile ? 3 : 4}
        spaceBetween={isMobile ? 120 : 150}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img
              src={image}
              className={styles.image}
              alt={`A photo of mountains`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
