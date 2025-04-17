import { OperatorDTO } from '../dtos/operatorDto.js'
import * as operatorRepository from '../repositories/operatorRepository.js'

export const createOperator = async (req, res) => {
    try {
        const { name } = req.body
        const operatorDto = new OperatorDTO(name)
        const validate = operatorDto.validate(name)
        if(!validate){
            return res.status(400).json({message : "Le champ name n'est pas valide"});
        }
        const newOperator = await operatorRepository.createOperator(name)

        res.status(200).json({ message: "Operator created with success", operator: newOperator, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getOperators = async (req, res) => {
    try {
        const operators = await operatorRepository.getAllOperators();
        const jsonArray = []
        if (operators) {
            operators.forEach(operator => {
                const name = operator.name;
                const operatorParse = OperatorDTO.fromEntity(operator)
                jsonArray.push(operatorParse)
            });
        }
        res.status(200).json(jsonArray)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}
