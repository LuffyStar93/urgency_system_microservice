import { Router } from "express";
import { createIncident, getIncidents, updateIncident } from "../controllers/incidentController.js";

const incidentRouter = Router();

incidentRouter.post("/api", createIncident);
incidentRouter.patch("/api", updateIncident);
incidentRouter.get("/api", getIncidents);


export default incidentRouter;