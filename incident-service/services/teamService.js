import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const createNewTeam = async (type, availability) => {
    const response = await axios.post(process.env.TEAM_SERVICE_URL, { type, availability }) 
    return response.data
}


export const fetchTeams = async () => {
    const response = await axios.get(process.env.TEAM_SERVICE_URL) 
    return response.data
}

export const fetchTeamAvailable = async () => {
    const response = await axios.get(process.env.TEAM_SERVICE_URL+'/available') 
    return response.data
}