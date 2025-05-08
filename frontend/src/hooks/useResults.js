import api from "../configs/axios";
import { useState, useEffect } from "react"

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (path, query = "") => {
        try {
           
            const response = await  api.get(path + query);
            let oncehubData = await response;

            setResults(oncehubData.data)
            setErrorMessage('')
        } catch (e ) {
            console.log('something went wrong terminal')

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        searchApi("/bookings","?limit=100")
    }, [])


    return [searchApi, results, errorMessage];

};

