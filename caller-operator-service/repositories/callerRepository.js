import Caller from "../models/Caller.js"

export const createCaller = async (name, phone) => {
    return await Caller.create({ name, phone })
}

export const getAllCallers = async () => {
    return await Caller.find({})
}