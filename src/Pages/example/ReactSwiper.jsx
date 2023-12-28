// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ReactSwiper(){
    return (
        <>
            <p className="text-danger px-20px bg-gray">npm i swiper</p>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{height: "500px"}}
            >
                <SwiperSlide style={{background: "#259700"}}>Slide 1</SwiperSlide>
                <SwiperSlide style={{background: "#259700"}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{background: "#259700"}}>Slide 3</SwiperSlide>
                <SwiperSlide style={{background: "#259700"}}>Slide 4</SwiperSlide>
            </Swiper>

            <hr />

            <Swiper
                modules={[Navigation, Pagination]}
                // modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                // effect={'fade'}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                style={{ height: "500px" }}
                lazy={"true"}
            >
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://source.unsplash.com/random?2"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://source.unsplash.com/random?3"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://source.unsplash.com/random?4"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://source.unsplash.com/random?5"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://source.unsplash.com/random?6"
                        alt=""
                        loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}

export default ReactSwiper;