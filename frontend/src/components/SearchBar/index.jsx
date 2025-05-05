import React, { useState } from "react";

import { Img } from "components";



const SearchBar = (props) => {
  return (
    <>
      <div style={{
        borderColor :  "grey" ,
        borderWidth : 1 ,
        display : "flex",
        marginLeft : 20,
        paddingRight : 20,
        paddingLeft : 10,
        paddingTop: 10,
        paddingBottom : 1

      }}> 
      <Img
              className="h-6 mr-2 my-auto"
              src="images/img_rewind_blue_gray_400.svg"
              alt="rewind"
            />  
      <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      style={props.style}
      placeholder={props.placeholder}
      />
      </div>   
     
    </>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
