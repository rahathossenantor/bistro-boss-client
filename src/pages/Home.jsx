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
import useData from "../hooks/useData";

const Home = () => {
    const [menuData] = useData();
    const popularItems = menuData.filter(item => item.category === "popular");

    return (
        <>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <CategorySlider></CategorySlider>
            <Info title="Bistro Boss"></Info>
            <SectionTitle title="FROM OUR MENU" subTitle="Check it out"></SectionTitle>
            <MenuItems data={popularItems}></MenuItems>
            <Phone></Phone>
            <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
                <Recomendations data={popularItems}></Recomendations>
            </div>
            <Features></Features>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
