/**
 * DTO (Data Transfer Object) pour une commande
 * Utilisé pour transférer les données entre les couches
 */
export class OperatorDTO {
    /**

     * @param {string} id - Items de la commande
     * @param {string} name - Items de la commande
 
     */

    constructor(data) {
      this.id = data._id;
      this.name = data.name;

    }

    validate(name) {
        if (!name) {
          throw new Error('Le champ name doit être renseigner');
        }
        return true
    }

    static fromEntity(operator){
      return new OperatorDTO(operator)
    }
  
    /**
     * Transforme le DTO en objet JSON
     * @returns {Object} - Un objet JSON
     */
    toJSON() {
      return {
        id: this.id,
        name: this.name
      };
    }
  } 