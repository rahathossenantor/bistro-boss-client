import { useState } from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuItems = ({ data }) => {
    const [dataLength, setDataLength] = useState(4);
    const [isShowAll, setIsShowAll] = useState(false);

    const handleIsShowAll = () => {
        if (dataLength === 4) {
            setDataLength(data.length);
        } else {
            setDataLength(4);
        }
        setIsShowAll(!isShowAll);
    };

    const showAllToggleBtn = <>
        <div className="text-center mt-5">
            <button onClick={handleIsShowAll} className="btn btn-secondary px-7 normal-case">{!isShowAll ? "See All" : "See Less"}</button>
        </div>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {
                    data.length !== 0 && data.slice(0, dataLength).map((item, idx) => <MenuItem key={idx}></MenuItem>)
                }
            </div>
            {
                data.length > 4 && showAllToggleBtn
            }
        </div>
    );
};

MenuItems.propTypes = {
    data: PropTypes.array.isRequired
};

export default MenuItems;
