import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectDB = () => {

    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connecté à la BDD"))
    .catch(() => console.log("Impossible de se connecter à la BDD"))
}