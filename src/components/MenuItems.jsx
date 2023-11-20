import MenuItem from "./MenuItem";
import SectionTitle from "./SectionTitle";

const MenuItems = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
            </div>
        </div>
    );
};

export default MenuItems;
