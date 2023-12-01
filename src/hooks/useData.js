import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useData = () => {
    const axiosPublic = useAxiosPublic();

    const { data = [], isPending: loading, refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get("/menu");
            return res.data;
        }
    });

    return { data, loading, refetch };
};

export default useData;
