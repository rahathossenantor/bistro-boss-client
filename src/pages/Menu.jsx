import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
import SectionTitle from "../components/SectionTitle";
import Info from "../components/Info";
import useData from "../hooks/useData";

const Menu = () => {
    const [menuData] = useData();
    const dessertItems = menuData.filter(item => item.category === "dessert");
    const pizzaItems = menuData.filter(item => item.category === "pizza");
    const saladItems = menuData.filter(item => item.category === "salad");
    const soupItems = menuData.filter(item => item.category === "soup");
    const offeredItems = menuData.filter(item => item.category === "offered");

    return (
        <>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Hero title="OUR MENU"></Hero>
            <SectionTitle title="TODAY'S OFFER" subTitle="Don't miss"></SectionTitle>
            <MenuItems data={offeredItems}></MenuItems>
            <Info title="DESSERTS"></Info>
            <MenuItems data={dessertItems}></MenuItems>
            <Info title="PIZZA"></Info>
            <MenuItems data={pizzaItems}></MenuItems>
            <Info title="SALADS"></Info>
            <MenuItems data={saladItems}></MenuItems>
            <Info title="SOUPS"></Info>
            <MenuItems data={soupItems}></MenuItems>
        </>
    );
};

export default Menu;
