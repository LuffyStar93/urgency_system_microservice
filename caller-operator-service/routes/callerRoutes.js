import { Router } from "express";
import { createCaller, getCallers } from "../controllers/callerController.js";

const callerRouter = Router();

callerRouter.get("/api/callers", getCallers);
callerRouter.post("/api/callers", createCaller);

export default callerRouter;