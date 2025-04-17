/**
 * DTO (Data Transfer Object) pour une commande
 * Utilisé pour transférer les données entre les couches
 */
export class TeamDTO {
    /**
     * @param {string} id - Identifiant de la commande
     * @param {string} type - Items de la commande
     * @param {Boolean} availability - Items de la commande
     * @param {Date} createdAt - Date de création
     * @param {Date} updatedAt
     */

    constructor(id, type, availability, createdAt) {
      this.id = id;
      this.type = type;
      this.availability = availability;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }

    validate(availability) {
        if (!availability || availability === false ) {
          throw new Error('La team est indisponible');
        }
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
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
      };
    }
  } 