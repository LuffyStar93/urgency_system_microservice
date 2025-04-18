export class UpdateIncidentStatusDto {
    
    /**
     * @param {localisation: string, description: string, status: string, caller: Caller, operator: Operator, team: Team} incident
     */
    constructor(incident){
        this.incident = incident
        this.validate()
    }

    /**
     * @throws {Error}
     */
    validate(data, newstatus) {
        if (data.status === newStatus) {
            throw new Error("cet incident est déja à ce status");
        }
    }

     /**
   * Crée un DTO à partir d'un objet JSON
   * @param {Object} json - L'objet JSON
   * @returns {CreateIncidentDTO} - Le DTO
   */
    static fromJSON(json) {
        if (!json || typeof json !== 'object') {
        throw new Error('Les données JSON sont requises');
        }

        return new UpdateIncidentStatusDto(json);
    }
}