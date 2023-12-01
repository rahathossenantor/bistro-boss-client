import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Recomendations from "../components/Recomendations";
import useData from "../hooks/useData";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
    const { category } = useParams();
    const categories = ["popular", "salad", "pizza", "soup", "dessert", "drinks"];
    const initialIndex = categories.indexOf(category) || 0;

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const { data } = useData();
    const popularItems = data.filter(item => item.category === "popular");
    const saladItems = data.filter(item => item.category === "salad");
    const pizzaItems = data.filter(item => item.category === "pizza");
    const soupItems = data.filter(item => item.category === "soup");
    const dessertItems = data.filter(item => item.category === "dessert");
    const drinkItems = data.filter(item => item.category === "drinks");

    const tabsData = [popularItems, saladItems, pizzaItems, soupItems, dessertItems, drinkItems];

    return (
        <>
            <Helmet>
                <title>Shop | Bistro Boss</title>
            </Helmet>

            <Hero title="OUR SHOP"></Hero>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-10">
                <TabList>
                    <Tab>Popular</Tab>
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
