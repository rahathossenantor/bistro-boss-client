import Banner from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import Features from "../components/Features";
import Info from "../components/Info";
import Menu from "../components/Menu";
import Phone from "../components/Phone";
import Recomendations from "../components/Recomendations";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Info></Info>
            <Menu></Menu>
            <Phone></Phone>
            <Recomendations></Recomendations>
            <Features></Features>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
