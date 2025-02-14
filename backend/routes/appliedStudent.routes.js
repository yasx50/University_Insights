import express from "express";
import { addAppliedStudent, getAllAppliedStudents } from "../controllers/appliedStudent.controller.js";

const router = express.Router();

// Route to add a new applied student
router.post("/add", addAppliedStudent);

// Route to get all applied students
router.get("/all", getAllAppliedStudents);

export default router;
