import { CallerDTO } from '../dtos/callerDto.js'
import * as callerRepository from '../repositories/callerRepository.js'

export const createCaller = async (req, res) => {
    try {
        const { name,phone } = req.body
        const callerDto = new CallerDTO(name,phone)
        const validate = callerDto.validate(name,phone)
        if(!validate){
            return res.status(400).json({message : "Tout les champs ne sont pas valide"});
        }
        const newCaller = await callerRepository.createCaller(name,phone)

        res.status(200).json({ message: "Caller created with success", caller: newCaller, success: true })

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getCallers = async (req, res) => {
    try {
        const callers = await callerRepository.getAllCallers();
        const jsonArray = []
        if (callers) {
            callers.forEach(caller => {
                const name = caller.name;
                const phone = caller.phone;
                const callerParse = CallerDTO.fromEntity(caller)
                jsonArray.push(callerParse) 
            });

        }
        console.log(callers)
        res.status(200).json(jsonArray)
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}
