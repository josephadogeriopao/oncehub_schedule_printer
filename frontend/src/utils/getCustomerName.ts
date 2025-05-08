
export const getCustomerName = (contactID : string,contacts : any[]) => {
    let customer : string | null = null;
    for( let contact of contacts){
      if (contact?.id === contactID){
        if(!contact.custom_fields.name){
            customer = `${contact.first_name} ${contact.last_name}` 
            break;

        }else{
            customer = contact.custom_fields.name 
            break;

        }

      }
    }
    return customer;
  
  }
  
  