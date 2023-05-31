import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";
import axios from "axios"

const useFetch = (url) => {

    const [data1,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   //console.log(url);
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                setLoading(true);
                const res = await axios.get(`http://localhost:1337/${url}`)//process.env.REACT_APP_API_URL+'products'
                //console.log(res, "ress")
                setData(res.data);
                setLoading(false);
            }catch(err){
                setError(err);
                console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    },[])

    //console.log(data1, "from fetch");
    return [data1];

};

export default useFetch;
