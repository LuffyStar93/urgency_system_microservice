import { UpdateIncidentStatusDto } from '../dtos/updateIncidentStatusDto.js';
import * as incidentRepository from '../repositories/incidentRepository.js';
import * as teamService from '../services/teamService.js';
import { IncidentDTO } from './../dtos/incidentDto.js';


export const createIncident= async (req, res) => {
    try {
        const data = req.body
        const incidentDto = new IncidentDTO()
        const validate = incidentDto.validate(data)
        if(validate){
            return res.status(400).json({message : "echec de l'enregistrement de l'incident"});
        }
        const availableTeam = await teamService.fetchTeamAvailable()
        const updateTeam = await teamService.updateTeamAvaibility(availableTeam._id)
        console.log(updateTeam)
        const newIncident= await incidentRepository.createIncident({...data, teamId:availableTeam})
        
        res.status(200).json({ message: "Incident created with success", incident: newIncident, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}


export const updateIncident = async (req, res) => {
    try {
        const { id, status } = req.body
        const incident = incidentRepository.fetchIncident(id)
        const updateIncidentStatus = new UpdateIncidentStatusDto()
        const validate = updateIncidentStatus.validate(incident, status)
        if(!validate){
            return res.status(400).json({message : "echec de l'update de l'incident"});
        }
        const updatedIncident= await incidentRepository.updateIncidentStatus(id, status)

        res.status(200).json({ message: "Incident updated with success", incident: updatedIncident, success: true })
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getIncidents = async () => {
    console.log("test controller");
    const incidents = incidentRepository.getAllIncidents()
    console.log(incidents);
    try {  
        const jsonArray = []
        if (incidents) {
            incidents.forEach(incident => {
                const incidentParse = IncidentDTO.fromEntity(incident)
                jsonArray.push(incidentParse) 
            });

        }
        res.status(200).json(jsonArray)
    } catch (err) {
       
    } 
}