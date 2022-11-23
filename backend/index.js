import express from "express";
import suppliesRoutes from "./routes/supplies.routes.js";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//routes
app.use(suppliesRoutes);

//mongoose
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("conected to mongoDB"))
    .catch((error) => console.error(error));

//port
app.listen(port, () => console.log(`listening on port: ${port}`))