export class CreateIncidentDTO {

    /**
     * @param {name: string, phone: string} caller
     * @param {name: string} operator
     * @param {type: string, availability: boolean} team
     */
    constructor(caller, operator, team){
        this.caller = caller;
        this.operator = operator;
        this.team = team;
        this.validate()
    }

    /**
     * @throws {Error}
     */
    validate() {
        if(!this.caller || !this.operator || !this.team){
            throw new Error('tout les champs doivent être renseignés')
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

    return new CreateIncidentDTO(json);
  }
}