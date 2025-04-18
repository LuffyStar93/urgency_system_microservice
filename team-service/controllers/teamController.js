import { TeamDTO } from '../dtos/teamDto.js'
import * as teamRepository from '../repositories/teamRepository.js'

export const createTeam = async (req, res) => {
    try {
        const { type } = req.body
        const teamDto = new TeamDTO(type)
        const validate = teamDto.validate(type)
        if(!validate){
            return res.status(400).json({message : "L'type n'est pas boolean"});
        }
        const newTeam = await teamRepository.createTeam(type)

        res.status(200).json({ message: "Team created with success", team: newTeam, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getTeams = async (req, res) => {
    try {
        const teams = await teamRepository.getAllTeams();
        const jsonArray = []
        if (teams) {
            teams.forEach(team => {
                const type = team.type;
                const availability = team.availability;
                const teamParse = TeamDTO.fromEntity(team)
                jsonArray.push(teamParse) 
            });

        }
        console.log(teams)
        res.status(200).json(jsonArray)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}

export const getAvailableTeams = async (req, res) => {
    console.log('test')
    try {
        const teams = await teamRepository.getAvailableTeams();
        res.status(200).json(teams)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }

    
}

export const updateTeam = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const updatedTeam = await teamRepository.updateTeamAvailability(data);
        // console.log(updateTeam)
        return res.status(200).json({
            success: true,
            message: "Team availability updated successfully",
            data: updatedTeam
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Couldn't update team availability",
            error: error.message
        });
    }
};
