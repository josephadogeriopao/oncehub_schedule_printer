import React from 'react';
import "./styles.css"

interface SearchBarProps {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,

}) => {

  return (

    <>
      <div className="search">
        <div className="search-form">
          <input type="text" placeholder="Search entire spreadsheet" value={value} onChange={onChange} />
        </div>
      </div>
    </>


  );
}

export default SearchBar;


