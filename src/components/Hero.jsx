import PropTypes from "prop-types";

const Hero = ({ title, subTitle }) => {
    return (
        <section className="hero-bg py-16">
            <div className="p-5 lg:p-8 xl:p-14">
                <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-16 bg-black text-white opacity-50 text-center">
                    <h3 className="text-5xl font-semibold mb-2">{title}</h3>
                    <h4 className="text-xl">{subTitle}</h4>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default Hero;
