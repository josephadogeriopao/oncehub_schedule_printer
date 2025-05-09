import api from "../configs/axios";
import { useState, useEffect } from "react"
import { convertToUTCFormat } from "../utils/convertToUTCFormat";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (date) => {
        try {
            const utcDate = convertToUTCFormat(date)
            console.log("utc date =======",utcDate)
           
            const response = await api.get(`/bookings?expand=contact,owner&limit=100&starting_time.gt=${utcDate}`)
            setResults(response.data)
            setErrorMessage('')
        } catch (e ) {
            console.log('something went wrong terminal')

            setErrorMessage('something went wrong\nerror message : ' + e.message)
        }

    }

    useEffect(() => {
        const date = new Date()
        searchApi(date)
    }, [])


    return [searchApi, results, errorMessage];

};



/**
 * 
   const handleClick = async () =>{
    try{
      const bookingResponse = await api.get(`/bookings?expand=contact,owner&limit=100&starting_time.gt=${toUTCFormat(date)}`)
      let bookingResults = await bookingResponse.data;
      console.log("user results ==",bookingResults)
      setData(bookingResults.data)

  }catch(e){
    console.log(e)
  }

 */