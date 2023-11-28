import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
    const { cart, refetch } = useCart();
    let totalPrice = cart.reduce((total, currentItem) => total + currentItem.price, 0);
    totalPrice = parseFloat(totalPrice.toFixed(2));
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>My cart | Bistro Boss</title>
            </Helmet>
            <SectionTitle title="WANNA ADD MORE?" subTitle="My Cart"></SectionTitle>
            <div className="mt-10">
                <div className="flex items-center justify-evenly mb-5">
                    <h3 className="text-3xl mr-2">Total orders: {cart.length}</h3>
                    <h3 className="text-3xl mr-2">Total price: ${totalPrice}</h3>
                    <button disabled={(totalPrice > 0) ? false : true} className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">Pay ${totalPrice}</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-lg">Index</th>
                                <th className="text-lg">Item Image</th>
                                <th className="text-lg">Item Name</th>
                                <th className="text-lg">Price</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((cartItem, idx) =>
                                    <tr key={idx}>
                                        <td className="text-xl text-center">
                                            {idx + 1}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask w-16 h-16">
                                                    <img src={cartItem.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-xl">
                                            {cartItem.name}
                                        </td>
                                        <td className="text-xl">${cartItem.price}</td>
                                        <th className="text-center">
                                            <button onClick={() => handleDelete(cartItem._id)} className="p-3 bg-[#B91C1C] rounded-sm">
                                                <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                                            </button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
