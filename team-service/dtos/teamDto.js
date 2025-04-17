/**
 * DTO (Data Transfer Object) pour une commande
 * Utilisé pour transférer les données entre les couches
 */
export class TeamDTO {
    /**

     * @param {string} id - Items de la commande
     * @param {string} type - Items de la commande
     * @param {boolean} availability - Items de la commande
     */

    constructor(data) {
      this.id = data._id;
      this.type = data.type;
      this.availability = data.availability;
    }

    validate(type) {
        if (!type) {
          throw new Error('La team est indisponible');
        }
        return true
    }

    static fromEntity(team){
      return new TeamDTO(team)
    }
  
    /**
     * Transforme le DTO en objet JSON
     * @returns {Object} - Un objet JSON
     */
    toJSON() {
      return {
        id: this.id,
        type: this.type,
        availability: this.availability,
      };
    }
  } 