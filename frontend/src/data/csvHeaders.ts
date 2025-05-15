
export const csvHeaders =[
    { label: 'Calendar', key: '_valuesCache.Calendar' },
    { label: 'Host', key: '_valuesCache.Host' },
    { label: 'Customer', key: '_valuesCache.Customer' },
    { label: 'Email', key: '_valuesCache.Email' },
    { label: 'Appointment Type', key: '_valuesCache.Subject' },
    { label: 'Location', key: '_valuesCache.Location' },
    { label: 'Status', key: '_valuesCache.Status' },
    { label: 'Start Time', key: '_valuesCache.Start Time' },
    { label: 'Duration Munites', key: '_valuesCache.duration_minutes' },

]

/**
 

import React from 'react';
import { CSVLink } from 'react-csv';

interface DataItem {
   name: string;
   email: string;
   age: number;
}

const MyComponent: React.FC = () => {
  const data: DataItem[] = [
    { name: 'John Doe', email: 'john@example.com', age: 30 },
    { name: 'Jane Doe', email: 'jane@example.com', age: 25 },
    { name: 'Peter Pan', email: 'peter@example.com', age: 18 },
  ];

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Age', key: 'age' },
  ];

  return (
    <CSVLink data={data} headers={headers} filename="my-data.csv">
      Download CSV
    </CSVLink>
  );
};

export default MyComponent;
 */