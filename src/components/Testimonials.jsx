import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [rating, setRating] = useState(3);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <SectionTitle title={"TESTIMONIALS"} subTitle={"What Our Clients Say"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    [1, 1, 1, 1].map((item, idx) =>
                        <SwiperSlide key={idx} >
                            <div className="text-center">
                                <div className="inline-block">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        onChange={setRating}
                                    />
                                </div>
                                <div className="mx-5 my-2">
                                    <div><img className="inline-block w-16" src="https://i.ibb.co/XfQWVML/quote.png" alt="icon" /></div>
                                    <p className="mx-3 md:mx-6 lg:mx-8 xl:mx-12 mt-2">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <h4 className="text-2xl font-semibold text-orange-400">JANE DOE</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;
