import Incident from "../models/Incident.js";
import { updateTeamAvaibility } from '../services/teamService.js';


export const createIncident = async (data) => {

    console.log(data);

    return await Incident.create({ ...data })

}


export const getAllIncidents = async () => {

    return await Incident.find()

}

export const updateIncidentStatus = async (id, status) => {

    const incident = await Incident.findByIdAndUpdate(id, { status })

    // Gérer le statut de l'équipe affectée si l'incident est clos (la remettre disponible)
    if(status === "resolved" && incident.teamId){
        return updateTeamAvaibility(id)
    }

    return incident
}

export const fetchIncident = async (id) => {
    return await Incident.find(id)
}

