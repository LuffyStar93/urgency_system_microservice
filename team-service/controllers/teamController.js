import teamDto from '../dtos/teamDto.js'
import teamRepository from '../repositories/teamRepository.js'

export const createTeam = async (req, res) => {
    try {
        const { type } = req.body

        const validate = teamDto.validate(type)
        if(!validate){
            return res.status(400).json({message : "Le type n'est pas boolean"});
        }
        const newTeam = await teamRepository.createTeam(type)

        res.status(200).json({ message: "Team created with success", team: newTeam, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getTeams = async (req, res) => {
    try {
        const teams = await getAllTeams();
        res.status(200).json(teams)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}

export const getAvailableTeams = async (req, res) => {
// getAvailableTeams()
}

export const updateTeam = async (req, res) => {
    // updateTeam()
}