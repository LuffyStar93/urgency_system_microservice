import Team from "../models/Team.js"

export const createTeam = async (data) => {
    console.log(data)
    return await Team.create({ type: data })
}


export const getAllTeams = async () => {
    return await Team.find({})
}

export const getAvailableTeams = async () => {
    // updateOne, findByIdAndUpdate, findOneAndUpdate
    const availableTeam = await Team.findOne(
        {
            availability: true
        }, //le filtre de recherche
       
    )
    console.log(availableTeam)
    if (!availableTeam) {
        throw new Error("No available teams to assign to the incident")
    }

    return availableTeam
}

export const updateTeamAvailability = async (data) => {
    // On récupère l'équipe par son data
    const team = await Team.findById(data.teamId);
    if (!team) {
        throw new Error("Team not found");
    }

    // On inverse la disponibilité
    team.availability = !team.availability;

    // On sauvegarde la modification
    await team.save();

    console.log(team.availability);
    return team;
};
