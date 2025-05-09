import { locationNames, LocationType } from "../data/locationNames";

export const getLocation = (virtual_conferencing : string | null, location_description : string) => {
    let location : string | null = null;
    if(virtual_conferencing){
      location = locationNames.VIRTUAL
    }
    else{
      const keys = Object.keys(locationNames);
      for(const key of keys){
        if(location_description?.toLocaleLowerCase()?.includes(key.trim()?.toLocaleLowerCase())){
          location = locationNames[key]  
          break;      
          
        }
        

      }

      return location;

    }
    

    return location;
  
  }
  
  