import { useEffect, useState } from "react"
import axios from "axios";

// Custom useFetch Hook
const useFetch = (url) => {

    // Defining all the states
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    // useEffect In which i will be fetching data
    useEffect((url) => {
        setLoading(true);
        axios.get("http://localhost:5000/videos/getAllVideos")
            .then((res) => setData(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [url]);
    return {data,error,loading};
}

export default useFetch;