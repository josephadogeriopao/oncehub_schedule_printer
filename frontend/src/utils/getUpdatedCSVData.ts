import getCST from "./getCST";
import { getCustomerName } from "./getCustomerName";
import { getLocation } from "./getLocation";

export const getUpdatedCSVData = (arr : any) => {
    const csvData : any[] = arr.map((item : any )=> ({
        ...item,
        "start_time" : getCST(item.original.starting_time),
        "full_name": `${item.original.owner.first_name} ${item.original.owner.last_name}`,
        "customer": getCustomerName(item.original.contact),
        "location": getLocation(item.original.virtual_conferencing,item.original.location_description)
      }));
      return csvData;
}

