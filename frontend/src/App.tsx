import React, { useState } from 'react';
import './App.css';
import api from './configs/axios';

function App() {
  const [data, setData] = useState<any>(null);

  const handleClick = async () =>{
    const response = await api.get("/bookings?limit=50");
    const data = response.data;
    setData(data)

  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick} style={{width: 100, height:50, backgroundColor:"red"}}>
          fetch data

        </button>
        data == {JSON.stringify(data,null,4)}
        <br />
        <br />
        {/* <PaginationTable batchData={batchDataSet}/> */}

      </header>

    </div>
  );
}

export default App;
