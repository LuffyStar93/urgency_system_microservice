import { Router } from "express";
import { createIncident, getIncidents, updateIncident } from "../controllers/incidentController.js";

const incidentRouter = Router();

incidentRouter.get("/api", getIncidents);
incidentRouter.post("/api", createIncident);
incidentRouter.patch("/api", updateIncident);



export default incidentRouter;