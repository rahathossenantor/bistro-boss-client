import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get("/menu")
            .then(response => {
                setData(response.data);
                setLoading(false);
            }).catch(err => console.error(err));
    }, [axiosSecure]);

    return [data, loading];
};

export default useData;
