import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const handleDeleteUser = (user) => {
        console.log(user);
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
                axiosSecure.delete(`/users/${user._id}`)
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
                <title>All Users | Bistro Boss</title>
            </Helmet>
            <SectionTitle title="MANAGE ALL USERS" subTitle="How many?"></SectionTitle>
            <div className="mt-10">
                <div className="mb-5">
                    <h3 className="text-3xl">Total users: {users.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th className="text-lg">Index</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Email</th>
                                <th className="text-lg">Role</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => {
                                    idx += 1;
                                    if (idx < 10) {
                                        idx = `0${idx}`;
                                    }
                                    return <tr key={idx}>
                                        <td className="text-xl text-center">
                                            {idx}
                                        </td>
                                        <td className="text-xl">
                                            {user.name}
                                        </td>
                                        <td className="text-xl">
                                            {user.email}
                                        </td>
                                        <td className="text-center ml-5">
                                            <button className="p-3 bg-[#D1A054] rounded-sm">
                                                <FaUsers className="text-xl text-white"></FaUsers>
                                            </button>
                                        </td>
                                        <th className="text-center ml-5">
                                            <button onClick={() => handleDeleteUser(user)} className="p-3 bg-[#B91C1C] rounded-sm">
                                                <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                                            </button>
                                        </th>
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

export default AllUsers;
