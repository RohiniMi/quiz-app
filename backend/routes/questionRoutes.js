import express from "express";
import { getQuestions,insertManyQuestions } from "../controller/questions.js";
const router = express.Router();

router.get("/question",getQuestions);
router.post("/question",insertManyQuestions);

export default router;