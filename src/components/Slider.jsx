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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import styles from "./Slider.module.css";

function SliderComponent() {
  return (
    <div className={styles.slider_container}>
      <Swiper
        slidesPerView={4}
        spaceBetween={150}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet`,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 150,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 150,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 150,
        //   },
        // }}
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
}

export default SliderComponent;
