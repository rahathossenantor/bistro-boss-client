import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuItems = ({ data }) => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
                {
                    data.map((item, idx) => <MenuItem key={idx} menuItemData={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/shop/${data[0]?.category}`}>
                    <button className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

MenuItems.propTypes = {
    data: PropTypes.array.isRequired
};

export default MenuItems;
