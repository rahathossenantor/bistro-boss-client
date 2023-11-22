import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Recomendations from "../components/Recomendations";
import useData from "../hooks/useData";

const Shop = () => {
    const [menuData] = useData();
    const dessertItems = menuData.filter(item => item.category === "dessert");
    const pizzaItems = menuData.filter(item => item.category === "pizza");
    const saladItems = menuData.filter(item => item.category === "salad");
    const soupItems = menuData.filter(item => item.category === "soup");
    const drinkItems = menuData.filter(item => item.category === "drinks");

    const tabsData = [dessertItems, pizzaItems, saladItems, soupItems, drinkItems];

    return (
        <>
            <Helmet>
                <title>Shop | Bistro Boss</title>
            </Helmet>
            <Hero title="OUR SHOP"></Hero>
            <Tabs className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                {
                    tabsData.map((data, idx) =>
                        <TabPanel key={idx}>
                            <Recomendations data={data}></Recomendations>
                        </TabPanel>
                    )
                }
            </Tabs>
        </>
    );
};

export default Shop;
