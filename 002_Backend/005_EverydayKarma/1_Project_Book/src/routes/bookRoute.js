import { Router } from "express";
import bookModel from "../models/bookModel.js";

const router = Router();

router.post("/add", async (req, res) => {
    try {
        const data = await bookModel.create(req.body);
        console.log(data);
        console.log("You are in ADD");
        res.status(201).json(data); // Sending a response back
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "An error occurred while adding the book" });
    }
});

export default router;
