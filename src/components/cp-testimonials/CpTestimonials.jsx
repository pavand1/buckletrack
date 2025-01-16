import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import testimonials from "./CpTestimonials_data";
import styles from "./cpTestimonials.module.scss";
import { useEffect } from "react";
import Aos from "aos";

const CpTestimonials = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className={styles.section} data-aos="fade-up">
        <h2 className={styles.mainHeading}>Testimonials</h2>
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={false}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={`bs-swiper typ-testimonial ${styles.swiper}`}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={testimonial.id}
                className={`testimonial-wrap ${styles.slide}`}
              >
                <div className={` testimonialInfo ${styles.testimonial}`}>
                  <div className={`avatarContainer ${styles.avatarContainer}`}>
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      className={styles.avatar}
                    />
                  </div>
                  <p className={styles.title}>{testimonial.name}</p>
                  <p className={styles.desc}>{testimonial.testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CpTestimonials;
