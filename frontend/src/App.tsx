import React, { useEffect, useState } from 'react';
import api from './configs/axios';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import BasicTable from './components/tables/BasictTable';
import DatePicker from "react-datepicker";
import { convertToUTCFormat } from './utils/convertToUTCFormat';
import "./App.css"
import DropDownSelect from './components/DropDownSelect';
import Loader from './components/Loader';
function App() {
  const [date, setDate] = useState<Date | null>(new Date());
  const minTime= new Date(0, 0, 0, 9, 30)  
  const maxTime= new Date(0, 0, 0, 16, 0)
  console.log("min date ===", minTime);
  console.log("max date ===", maxTime)
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isDataLoading, setIsDataLoading] = useState(false);



  const [data, setData] = useState<any>(null);

  const getSelectedStatus = (status : string) :  string=> {

    if(status.length <= 0){
      return ""
    }else{
      return `&status=${status}`
    }
  }

  const fetchBookings = async ()=>{
    try{
      const utcDate = convertToUTCFormat(date);
      console.log("utc date ===== ", utcDate)
      setIsDataLoading(true);

      const bookingResponse = await api.get(`/bookings?expand=contact,owner&limit=100&starting_time.gt=${utcDate}${getSelectedStatus(selectedValue)}`)
      setIsDataLoading(false);
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
    <div className="App">
        <header className="App-header">
        <div className="w3-container w3-margin-top" id="rooms">
    <h3>OnceHub Schedule Printer</h3>
    <p><i>print schedules with ease using criteria below.</i></p>
  </div>
  
  <div className="w3-row-padding">
    <div className="w3-col m2">
      <label><i className="fa fa-calendar-o"></i> Start Date </label>
      <DatePicker selected={date} onChange={(date) => setDate(date)} 
                      isClearable dropdownMode="scroll" startOpen showPopperArrow showTimeSelect
                       minTime={minTime} maxTime={maxTime}
                       dateFormat="MM-dd-YYYY h:mm a" timeIntervals={15}
                       wrapperClassName="w3-input w3-border dropdown" 
                      
                      />
      {/* <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY"/> */}
    </div>
    <div className="w3-col m1">
      <label><i className="fa fa-info"></i> Status</label>
      <DropDownSelect 
      selectedValue={selectedValue} setSelectedValue={setSelectedValue}
      
      />
      {/* <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY"/> */}
    </div>
    {/* <div className="w3-col m2">
      <label><i className="fa fa-male"></i> Adults</label>
      <input className="w3-input w3-border" type="number" placeholder="1"/>
    </div> */}
    {/* <div className="w3-col m2">
      <label><i className="fa fa-child"></i> Kids</label>
      <input className="w3-input w3-border" type="number" placeholder="0"/>
    </div>
     */}
    <div className="w3-col m2">
      <label><i className="fa "></i> {}</label>
      <button className="w3-button w3-block w3-black"  
            onClick={()=>{fetchBookings()}} 
            style={{ backgroundColor:"red"}}>
      <label><i className="fa fa-search"></i> Search</label>
      </button>
    </div>
  </div>
          {/* <DatePicker selected={date} onChange={(date) => setDate(date)} 
                      isClearable dropdownMode="scroll" startOpen showPopperArrow showTimeSelect
                       minTime={minTime} maxTime={maxTime}
                       dateFormat="MM-dd-YYYY h:mm a" timeIntervals={15}
                      
                      /> */}

          {data?
          <BasicTable dataJSON={data}/> :<Loader /> 
          }
          
        </header>
      </div>
      <Footer/>
    </>
  );
}

export default App;




function DropdownInput() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event : any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        Select an option:
        <select value={selectedValue} onChange={handleChange}>
          <option value="">--Please choose an option--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

