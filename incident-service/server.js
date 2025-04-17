import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
// import teamRouter from './routes/teamRoutes';

dotenv.config();
const { PORT } = process.env

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Faire votre routeur
// app.use("/", teamRouter)


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))