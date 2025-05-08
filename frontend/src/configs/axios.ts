import axios from 'axios'
import type { AxiosInstance } from 'axios'

const baseURL = process.env.REACT_APP_ONCEHUB_BASE_URL;
const apiKey = process.env.REACT_APP_ONCEHUB_API_KEY;

console.log("base url ",baseURL)
console.log("api key ",apiKey)



const headers ={
    'Content-Type': 'application/json',
    "Accept":'application/json',
    "Access-Control-Allow-Origin": "*",
    "API-key": apiKey   
}

const api : AxiosInstance =  axios.create({
      
    baseURL: baseURL ,
    headers: headers
  
})
console.log(api!==null?"axios api instance created ":" axios api instance does not exist");

export default api