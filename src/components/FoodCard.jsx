import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ food }) => {
    const { image, name, price, recipe } = food;
    const { user } = useAuth();
    const location = `/shop/${food.category}`;
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { cart, refetch } = useCart();

    const handleAddToCart = () => {
        const isExist = cart.find(item => item.itemId === food._id);
        if (isExist) {
            Swal.fire({
                icon: "error",
                title: `${name} already added to your cart`,
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        if (user) {
            const cartData = {
                itemId: food._id,
                email: user.email,
                image, name,
                price
            };
            axiosSecure.post("cart", cartData)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Do you want to login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: location });
                }
            });
        }
    };

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
                <button onClick={handleAddToCart} className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">Add to cart</button>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.object.isRequired
};

export default FoodCard;
