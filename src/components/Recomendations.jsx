import FoodCard from "./FoodCard";
import PropTypes from "prop-types";

const Recomendations = ({ data }) => {
    return (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
            {
                data.map((item, i) => <FoodCard key={i} food={item}></FoodCard>)
            }
        </div>
    );
};

Recomendations.propTypes = {
    data: PropTypes.array.isRequired
};

export default Recomendations;
