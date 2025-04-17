import { Router } from "express";
import { createOperator, getOperators } from "../controllers/operatorController.js";

const operatorRouter = Router();

operatorRouter.get("/api/operators", getOperators);
operatorRouter.post("/api/operators", createOperator);

export default operatorRouter;