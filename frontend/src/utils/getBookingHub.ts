import { calendarNames } from "../data/calendarNames";
const getBookingHub = (calendar : string) => {
  if(!calendarNames[calendar]){
    return "CS Master Page"
  }
  return calendarNames[calendar]
}

export default getBookingHub;
