import express from "express";
import suppliesRoutes from "./routes/supplies.routes.js";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static(path.join(__dirname, "..", "frontend", "build")))

//routes
app.use(suppliesRoutes);
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"))
})

//mongoose
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("conected to mongoDB"))
    .catch((error) => console.error(error));

//port
app.listen(port, () => console.log(`listening on port: ${port}`))