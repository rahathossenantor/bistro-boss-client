import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    
    return (
        <Carousel autoPlay={true} infiniteLoop>
            <div>
                <img src="https://i.ibb.co/kQ4P7Wt/01.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/SwCfpqv/02.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/56WVPjq/03.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/dm635H9/04.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/Lkq6mHq/05.png" />
            </div>
            <div>
                <img src="https://i.ibb.co/S5zGQHL/06.png" />
            </div>
        </Carousel>
    );
};

export default Banner;
