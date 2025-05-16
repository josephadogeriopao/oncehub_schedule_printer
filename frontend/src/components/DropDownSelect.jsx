import React from 'react';
const DropDownSelect = ({
    selectedValue,
    setSelectedValue
}) => {
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <div >
      <label>
        <select className="w3-input w3-border" value={selectedValue} onChange={handleChange}>
          <option value="">All</option>
          <option value="scheduled">Scheduled</option>
          <option value="rescheduled">Rescheduled</option>
          <option value="requested">Requested</option>
        </select>
      </label>
    </div>
  );
}

export default DropDownSelect;
