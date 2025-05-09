import React, { useEffect, useState } from 'react';
import api from './configs/axios';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import BasicTable from './components/tables/BasictTable';
import DatePicker from "react-datepicker";
import { convertToUTCFormat } from './utils/convertToUTCFormat';
function App() {
  const [date, setDate] = useState<Date | null>(new Date());


  const [data, setData] = useState<any>(null);

  const fetchBookings = async ()=>{
    try{
      const bookingResponse = await api.get(`/bookings?expand=contact,owner&limit=100&starting_time.gt=${convertToUTCFormat(date)}`)
      let bookingResults = await bookingResponse.data;
      console.log("user results ==",bookingResults)
      setData(bookingResults.data)

  }catch(e){
    console.log(e)
  }

  }

  useEffect(()=>{
    fetchBookings();

  },[])


  return (

    <>
    <Header/>
    <div className="App">
        <header className="App-header">
          <button 
            onClick={()=>{fetchBookings()}} 
            style={{width: 100, height:50, backgroundColor:"red"}}>
            fetch data

          </button>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />

          {data?
          <BasicTable dataJSON={data}/> :<></>
          }
          
        </header>
      </div>
      <Footer/>
    </>
  );
}

export default App;
