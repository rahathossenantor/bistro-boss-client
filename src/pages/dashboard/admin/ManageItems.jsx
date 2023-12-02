import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import useData from "../../../hooks/useData";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const { data, refetch } = useData();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted.`,
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
                <title>Manage items | Bistro Boss</title>
            </Helmet>
            <SectionTitle title="MANAGE ALL ITEMS" subTitle="Hurry Up!"></SectionTitle>
            <div className="mt-10">
                <div className="mb-5">
                    <h3 className="text-3xl">Total items: {data.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th className="text-lg">Index</th>
                                <th className="text-lg">Image</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Price</th>
                                <th className="text-lg">Update</th>
                                <th className="text-lg">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, idx) => {
                                    idx += 1;
                                    if (idx < 10) {
                                        idx = `0${idx}`;
                                    }
                                    return <tr key={idx}>
                                        <td className="text-xl text-center">
                                            {idx}
                                        </td>
                                        <td className="text-xl">
                                            <div className="avatar">
                                                <div className="w-16 rounded">
                                                    <img src={item.image} alt="menu-item" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-xl">
                                            {item.name}
                                        </td>
                                        <td className="text-right text-xl">
                                            ${item.price}
                                        </td>
                                        <td className="text-center">
                                            <Link to={`/dashboard/update-item/${item._id}`}>
                                                <button className="p-3 bg-[#D1A054] rounded-sm">
                                                    <FaEdit className="text-xl text-white"></FaEdit>
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="text-center">
                                            <button onClick={() => handleDeleteItem(item)} className="p-3 bg-[#B91C1C] rounded-sm">
                                                <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                                            </button>
                                        </td>
                                    </tr>
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
