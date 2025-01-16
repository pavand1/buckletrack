import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { testimonials } from './CpOurClients_data'; // Import the mock data
import styles from './cpOurClients.module.scss';

const CpOurClients = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Our Clients</h2>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={false}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className={`bs-swiper ${styles.swiper}`}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.testimonial}>
                <img className={styles.swiperImage} src={testimonial.image} alt="clients"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CpOurClients;
