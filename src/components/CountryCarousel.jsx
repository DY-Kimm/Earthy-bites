import { FLAGS } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function CountryCarousel() {
  return (
    <section className="flags container">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        centeredSlides={false}
        spaceBetween={24}
        breakpoints={{
          0:   { slidesPerView: 3 },
          560: { slidesPerView: 4 },
          980: { slidesPerView: 5 },   // 데스크탑에서 5개
        }}
      >
        {FLAGS.map(f => (
          <SwiperSlide key={f.code}>
            <Link to={`/country/${f.name}`} className="flag-card" aria-label={f.name}>
              <div className="flag-item">
                <img src={f.img} alt={f.name}/>
              </div>
              <span className="flag-name">{f.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
