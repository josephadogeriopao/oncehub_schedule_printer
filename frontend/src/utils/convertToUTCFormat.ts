export const convertToUTCFormat  = (date : Date | null)=>{
   const utcString = date?.toISOString() ;
   console.log(utcString); // Output: e.g., "2025-05-08T21:08:00.000Z"
   return utcString as string;

}