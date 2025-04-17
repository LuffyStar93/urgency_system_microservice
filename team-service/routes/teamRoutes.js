import { Router } from "express";
import { createTeam, getTeams } from "../controllers/teamController.js";

const teamRouter = Router();

teamRouter.get("/", getTeams);
teamRouter.post("/", createTeam);
teamRouter.get("/available", getTeams);
teamRouter.patch("/:id", getTeams);

export default teamRouter;