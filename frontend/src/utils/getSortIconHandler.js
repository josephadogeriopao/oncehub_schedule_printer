export const getSortIconHandler = (text ) =>{
    let style = {color:"yellow",marginRight:5,marginLeft:5}
   // console.log(text)    
    switch(text){
        case "asc":
            return <i className="fa fa-caret-up " style={style}>            
                   </i>
        case "desc":
            return <i className="fa fa-caret-down "   style={style}>  
                   </i>
        default:
            return <i className="fa fa-minus"   style={style}>  
                  </i>
    }   
    
      
    
}