import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
import SectionTitle from "../components/SectionTitle";
import Info from "../components/Info";

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Hero title="OUR MENU" subTitle="Would you like to try a dish?"></Hero>
            <SectionTitle title="TODAY'S OFFER" subTitle="Don't miss"></SectionTitle>
            <MenuItems data={[1, 1, 1, 1, 1, 1]}></MenuItems>
            <Info title="DESSERTS"></Info>
            <MenuItems data={[1, 1, 1, 1, 1, 1]}></MenuItems>
            <Info title="PIZZA"></Info>
            <MenuItems data={[1, 1, 1, 1, 1, 1]}></MenuItems>
            <Info title="SALADS"></Info>
            <MenuItems data={[1, 1, 1, 1, 1, 1]}></MenuItems>
            <Info title="SOUPS"></Info>
            <MenuItems data={[1, 1, 1, 1, 1, 1]}></MenuItems>
        </>
    );
};

export default Menu;
