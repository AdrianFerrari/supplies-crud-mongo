import express from "express";
const router = express.Router();
import suppliesSchema from "../models/supplies.js";

/* router.get("/", (req, res) => {
    res.send("hola");
}); */

router.get("/supplies", async (req, res) => {
    try {
        const supplies = await suppliesSchema.find();
        res.status(200).json(supplies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/supplies", async (req, res) => {
    try {
        const supply = await suppliesSchema(req.body);
        const response = supply.save();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/supplies/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const supply = await suppliesSchema.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).send(supply);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.delete("/supplies/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const supply = await suppliesSchema.findByIdAndDelete(id);
        if (!supply) return res.sendStatus(404);
        res.status(200).send(supply);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;
