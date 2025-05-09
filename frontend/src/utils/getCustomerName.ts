import getPlaceHolder from "./getPlaceHolder";

export const getCustomerName = (contact : any) => {

  if(contact.custom_fields[0].value === null){
   return `${getPlaceHolder(contact.first_name)} ${getPlaceHolder(contact.last_name)}` 
  }
  else{
    return contact.custom_fields[0].value;

  }  
}
  
  