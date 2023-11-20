import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Hero title="OUR MENU" subTitle="Would you like to try a dish?"></Hero>
        </>
    );
};

export default Menu;
