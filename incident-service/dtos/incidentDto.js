export class IncidentDTO {
    /**
     * 
     * @param {string} id 
     * @param {string} localisation 
     * @param {string} description 
     * @param {string} status 
     * @param {Date} reportedAt 
     * @param {string} caller 
     * @param {string} operator 
     * @param {string} team 
     */
    constructor(id, localisation, description, status, reportedAt, caller, operator, team) {
        this.id = id;
        this.localisation = localisation;
        this.description = description;
        this.status = status;
        this.reportedAt = reportedAt;
        this.caller = caller;
        this.operator = operator;
        this.team = team;
    }

    /**
     * 
     * @param {Incident} incident 
     * @returns {IncidentDTO}
     */
    static fromEntity(incident) {
        const callerDtos = incident.callers.map(caller => ({
            name: caller.name,
            phone: caller.phone
        }))

        const operatorDtos = incident.operators.map(operator => ({
            name: operator.name
        }))

        const teamDtos = incident.teams.map(team => ({
            type: team.type,
            availability: team.availability,
        }))

        return new IncidentDTO(
            incident.id,
            incident.localisation,
            incident.description,
            incident.status,
            incident.reportedAt,
            callerDtos,
            operatorDtos,
            teamDtos
        );
    }

    validate(data){
        if (!data.localisation  || !data.description || !data.callerId) {
            throw new Error("remplir tout les champs");
        }
    }

    /**
     * 
     * @returns {Object}
     */
    toJSON(){
        return{
            id: this.id,
            localisation: this.localisation,
            description: this.description,
            status: this.status,
            reportedAt: this.reportedAt,
            caller: this.caller,
            operator: this.operator,
            team: this.team
        };
    }
}