import { calendarNames } from "../data/calendarNames";
const getBookingHub = (calendar : string) => {
  return calendarNames[calendar]
}

export default getBookingHub;
