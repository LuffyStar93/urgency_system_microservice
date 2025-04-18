import { Router } from "express";
import { createTeam, getAvailableTeams, getTeams, updateTeam } from "../controllers/teamController.js";

const teamRouter = Router();

teamRouter.get("/api", getTeams);
teamRouter.post("/api", createTeam);
teamRouter.get("/api/available", getAvailableTeams);
teamRouter.patch("/api/:id", updateTeam);

export default teamRouter;