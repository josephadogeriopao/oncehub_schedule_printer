import React, { useState, useRef } from 'react';
import api from './configs/axios';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import getBookingHub from './utils/getBookingHub';
import BasicTable from './components/tables/BasictTable';

import useResults from './hooks/useResults';
import { getUserName } from './utils/getUserName';
import { getCustomerName } from './utils/getCustomerName';
function App() {
  const [searchApi, results, errorMessage] = useResults();

  const [data, setData] = useState<any>(null);

  const handleClick = async () =>{
    try{
      const bookingResponse = await api.get("/bookings?limit=100")
      let bookingResults = await bookingResponse.data;
      console.log("user results ==",bookingResults)

      setData(bookingResults.data);
      const userResponse = await api.get("/users?limit=100");
      const userResults = await userResponse.data;
      console.log("user results ==",userResults)

      const contactResponse = await api.get("/contacts?limit=100");
      const contactResults = await contactResponse.data; 
      console.log("contact results ==",contactResults)
      let updatedBookings : any[] | null = null;
      updatedBookings = bookingResults.data.map((booking : any)=>{
        //console.log(booking)
        booking["host_name"] = getUserName(booking.owner, userResults.data);
        booking["customer_name"] = getCustomerName(booking.contact, contactResults.data)
        return booking
  
      })

      setData(updatedBookings)

  }catch(e){
    console.log(e)
  }


  }
  return (

    <>
    <Header/>
    <div className="App">
        <header className="App-header">
          <button onClick={handleClick} style={{width: 100, height:50, backgroundColor:"red"}}>
            fetch data

          </button>
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
