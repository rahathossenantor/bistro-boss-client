import PropTypes from "prop-types";

const MenuItem = ({ data }) => {
    return (
        <div className="border flex flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-4">
            <div className="bg-slate-400 w-32 h-32"></div>
            <div>
                <h4 className="text-[22px]">ROAST DUCK BREAST ------------------ <span className="text-[#BB8506]">$14.5</span></h4>
                <p className="text-lg">Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
            </div>
        </div>
    );
};

// MenuItem.propTypes = {
//     data: PropTypes.object.isRequired
// };

export default MenuItem;
