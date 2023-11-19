import Banner from "../components/Banner";
import CategorySlider from "../components/CategorySlider";
import Info from "../components/Info";
import Menu from "../components/Menu";
import Phone from "../components/Phone";
import Recomendations from "../components/Recomendations";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Info></Info>
            <Menu></Menu>
            <Phone></Phone>
            <Recomendations></Recomendations>
        </>
    );
};

export default Home;
