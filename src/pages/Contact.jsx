import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Bistro Boss</title>
            </Helmet>

            <Hero title="CONTACT US"></Hero>

            <SectionTitle title="OUR LOCATION" subTitle="Visit Us"></SectionTitle>
            <ContactInfo></ContactInfo>

            <SectionTitle title="CONTACT FORM" subTitle="Send Us a Message"></SectionTitle>
            <ContactForm></ContactForm>
        </>
    );
};

export default Contact;
