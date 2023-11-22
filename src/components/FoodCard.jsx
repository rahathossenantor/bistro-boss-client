import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
    const { image, name, price, recipe } = food;

    return (
        <div className="rounded-lg shadow-xl relative">
            <figure className="w-full">
                <div className="rounded-md flex items-center justify-center">
                    <img className='inline-block w-full' src={image} alt="cover-image" />
                </div>
            </figure>
            <h4 className="absolute top-2 right-2 py-1 px-4 text-base font-semibold rounded-md bg-black text-white">${price}</h4>
            <div className="p-5 rounded-lg rounded-t-none text-center">
                <h4 className="font-semibold text-xl">{name}</h4>
                <p className="mb-2">{recipe}</p>
                <button className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">Add to cart</button>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.object.isRequired
};

export default FoodCard;
