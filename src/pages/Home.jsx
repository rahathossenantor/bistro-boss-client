import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import Features from "../components/Features";
import Info from "../components/Info";
import MenuItems from "../components/MenuItems";
import Phone from "../components/Phone";
import Recomendations from "../components/Recomendations";
import Testimonials from "../components/Testimonials";
import SectionTitle from "../components/SectionTitle";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Info title="Bistro Boss"></Info>
            <SectionTitle title="FROM OUR MENU" subTitle="Check it out"></SectionTitle>
            <MenuItems data={[1,1,1,1,1,1]}></MenuItems>
            <Phone></Phone>
            <Recomendations></Recomendations>
            <Features></Features>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
