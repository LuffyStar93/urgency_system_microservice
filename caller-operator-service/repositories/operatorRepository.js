import Operator from "../models/Operator.js"

export const createOperator = async (name) => {
    return await Operator.create({ name })
}

export const getAllOperators = async () => {
    return await Operator.find({})
}