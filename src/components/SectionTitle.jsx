import PropTypes from "prop-types";

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center py-5">
            <p className="text-yellow-600 text-lg mb-1">---{subTitle}---</p>
            <h3 className="text-4xl py-1 border-y-2 inline-block uppercase font-semibold">{title}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default SectionTitle;
