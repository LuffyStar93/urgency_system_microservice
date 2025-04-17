import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import callerRouter from './routes/callerRoutes.js';
import operatorRouter from "./routes/operatorRoutes.js";

dotenv.config();
const { PORT } = process.env

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Faire votre routeur
app.use("/", callerRouter)
app.use("/", operatorRouter)


app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))