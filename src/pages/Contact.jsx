import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Bistro Boss</title>
            </Helmet>
            <Hero title="CONTACT US"></Hero>
        </>
    );
};

export default Contact;
