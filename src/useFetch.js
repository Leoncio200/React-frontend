import axios from "axios";
import { useState, useEffect } from "react";

export function UseFetch(url) {

  const [data, setData] = useState([]);

  const fetchData = () =>{
    return axios.get(url)
    .then((response) => setData(response.data.results))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
}