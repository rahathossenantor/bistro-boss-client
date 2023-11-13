import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "./SectionTitle";

const CategorySlider = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <SectionTitle title={"ORDER ONLINE"} subTitle={"From 11:00 am to 10:00 pm"} ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/M2yvscV/slide1.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qknHnjH/slide2.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JRWvtqB/slide3.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7k51ByP/slide4.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/M2yvscV/slide1.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/qknHnjH/slide2.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/JRWvtqB/slide3.jpg" alt="slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/7k51ByP/slide4.jpg" alt="slide-image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategorySlider;
