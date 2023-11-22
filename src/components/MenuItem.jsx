import PropTypes from "prop-types";

const MenuItem = ({ menuItemData }) => {
    const { image, name, price, recipe } = menuItemData;

    return (
        <div className="border flex flex-col md:flex-row lg:flex-row xl:flex-row items-center gap-4">
            <div className="w-[145px] h-32">
                <img src={image} alt="image" className="inline-block w-full h-full"/>
            </div>
            <div>
                <h4 className="text-[22px]">{name} ------------------ <span className="text-[#BB8506]">${price}</span></h4>
                <p className="text-lg">{recipe}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    menuItemData: PropTypes.object.isRequired
};

export default MenuItem;
