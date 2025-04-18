import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const createNewCaller = async (type, availability) => {
    const response = await axios.post(process.env.CALLER_SERVICE_URL, { type, availability }) 
    return response.data
}


export const fetchCallers = async () => {
    const response = await axios.get(process.env.CALLER_SERVICE_URL) 
    return response.data
}

export const fetchCallerAvailable = async () => {
    const response = await axios.get(process.env.CALLER_SERVICE_URL+'/available') 
    return response.data
}