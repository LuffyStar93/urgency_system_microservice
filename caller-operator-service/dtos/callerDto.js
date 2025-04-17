/**
 * DTO (Data Transfer Object) pour une commande
 * Utilisé pour transférer les données entre les couches
 */
export class CallerDTO {
    /**

     * @param {string} id - Items de la commande
     * @param {string} name - Items de la commande
     * @param {string} phone - Items de la commande
     */

    constructor(data) {
      this.id = data._id;
      this.name = data.name;
      this.phone = data.phone;
    }

    validate(name, phone) {
        if (!name || !phone) {
          throw new Error('Tout les champs doivent être renseigné.');
        }
        return true
    }

    static fromEntity(caller){
      return new CallerDTO(caller)
    }
  
    /**
     * Transforme le DTO en objet JSON
     * @returns {Object} - Un objet JSON
     */
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        phone: this.phone,
      };
    }
  } 