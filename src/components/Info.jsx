import PropTypes from "prop-types";

const Info = ({title}) => {
    return (
        <section className="info-bg mb-20">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5  py-5 lg:py-8 xl:py-14 flex items-center justify-center">
                <div className="border bg-white p-5 lg:p-8 xl:p-14 text-center">
                    <h2 className="text-4xl font-semibold mb-2">{title}</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

Info.propTypes = {
    title: PropTypes.string.isRequired
};

export default Info;
