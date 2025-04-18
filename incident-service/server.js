import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import incidentRouter from './routes/incidentRoutes.js';

dotenv.config();
const { PORT } = process.env

const app = express();
app.use(cors())
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Faire votre routeur
app.use("/", incidentRouter)


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))