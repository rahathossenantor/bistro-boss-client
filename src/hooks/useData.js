import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json")
            .then(response => {
                setData(response.data);
                setLoading(false);
            }).catch(err => console.error(err));
    }, []);

    return [data, loading];
};

export default useData;
