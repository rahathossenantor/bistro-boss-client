import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data?.isAdmin;
        }
    });
    return { isAdmin };
};

export default useAdmin;
