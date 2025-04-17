import { Router } from "express";
import { createTeam, getAvailableTeams, getTeams } from "../controllers/teamController.js";

const teamRouter = Router();

teamRouter.get("/api", getTeams);
teamRouter.post("/api", createTeam);
teamRouter.get("/available", getAvailableTeams);
// teamRouter.patch("/:id", getTeams);

export default teamRouter;