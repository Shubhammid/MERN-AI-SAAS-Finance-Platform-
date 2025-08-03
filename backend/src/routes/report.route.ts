import { Router } from "express";
import { getAllReportsController } from "../controllers/report.controller";

const reportRoutes = Router();

reportRoutes.get("/all", getAllReportsController);

export default reportRoutes;
