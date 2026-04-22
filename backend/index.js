import express from "express";
import dbConnect from "./config/db.js";
import Question from "./models/questions.js";
import cors from "cors";
import dotenv from "dotenv/config"
import questionRoutes from "./routes/questionRoutes.js"
import { pathHandlerMiddleware } from "./middlewares/pathHandlerMiddleware.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());
dbConnect();

app.use("/",questionRoutes);

app.use(pathHandlerMiddleware);
app.use(errorHandler);
app.listen(process.env.PORT, () => console.log(`server is running`));