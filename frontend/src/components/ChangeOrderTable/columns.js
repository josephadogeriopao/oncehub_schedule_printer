import { createColumnHelper } from "@tanstack/react-table";
import IndeterminateCheckbox from "../IndeterminateCheckbox";
import { OperationBar } from "../OperationBar";


const columnHelper = createColumnHelper();

export const columnDefWithCheckBox = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row) => `${row.ASSESSMENT_NO}`,
    header: "Assessment No",
  },
  {
    accessorKey: "PARID",
    header: "Parid",
  },
  {
    accessorKey: "TAXPAYER_NAME",
    header: "Tax Payer Name",
  },
  {
    accessorKey: "WARD",
    header: "Ward"
  },
  {
    /**this column will handle */
    accessorKey: "",
    header: " " + "\n\n\n",
    cell: ({ row }) =><>
  
  <OperationBar row={row.original}/>
    
    </>,
  },
];


/**
 * Setting Up Routes:
To enable data passing through links, the initial step involves configuring routes within our application. This typically involves importing necessary modules and defining routes using the Route component provided by React Router in the main component, often named App.js.

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import OtherComponent from './components/OtherComponent';

function MyCustomApp() {
    return (
        <Router>
            <Link to="/other">Go to Other Component</Link>
            <Route exact path="/" component={Home} />
            <Route path="/other" component={OtherComponent} />
        </Router>
    );
}

export default MyCustomApp;
Passing Data Via Links:
With React Router, the passage of data alongside links involves utilizing the to prop within the Link component. This to prop accepts an object comprising the pathname and a state object carrying the desired data for transmission.

import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
    const dataToPass = { name: 'GeeksforGeeks', age: 20 };
    return (
        <div>
            <h1>Welcome to the Home Component</h1>
            <Link to={{
                pathname: '/other',
                state: dataToPass
            }}>
                Go to GeeksforGeeks Page
            </Link>
        </div>
    );
}
export default Home;
Receiving Data in the Destination Component:
Accessing the transmitted data from the link involves utilizing the location prop within the destination component. Within this prop, the data becomes accessible through the state object.

import React from 'react';
function OtherComponent(props) {
    const { state } = props.location;
    const { name, age } = state;
    return (
        <div>
            <h1>Hello GeeksforGeeks pages</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}
export default OtherComponent;
 */