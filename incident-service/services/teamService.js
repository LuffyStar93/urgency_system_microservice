import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


export const fetchTeams = async () => {
    const response = await axios.get(process.env.TEAM_SERVICE_URL) 
    return response.data
}

export const updateTeamAvaibility = async (teamId) => {
    // console.log(teamId)
    const response = await axios.patch(process.env.TEAM_SERVICE_URL+'/'+teamId, {teamId}) 
    return response.data
}

export const fetchTeamAvailable = async () => {
    // console.log('test')
    const response = await axios.get(process.env.TEAM_SERVICE_URL+'/available') 
    return response.data
}

