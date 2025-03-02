import express from "express";
import { apiPath, apiPort, db } from "../config.js";
import * as models from "./models/index.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.post(apiPath + "/fetchTransaction/all", async (req, res) => {
    const user = await models.user.findOne({
        email: req.body.email
    });

    if (!user) return res.sendStatus(401);
    
    const transactions = await models.transaction.find({
        user: user.id
    });

    return res.json(transactions);
});

app.post(apiPath + "/addTransaction/", async (req, res) => {
    const {
        email,
        date,
        description,
        category,
        amount,
        type,
    } = req.body;

    const user = await models.user.findOne({
        email: email
    });

    if (!user) return res.sendStatus(401);

    try {
        await models.transaction.create({
            amount,
            category,
            date,
            description,
            type,
            userId: user.id
        }).save();
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }

})

app.post(apiPath + "/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;
})

async function startBackend({
    apiPort,
    dbURL
}) {
    console.log("Connecting to MongoDB...");
    try {
        await mongoose.connect(dbURL);
        console.log("Success.")
    } catch (error) {
        console.log("An error occurred while connecting to MongoDB:\n", error.toString());
    };
    app.listen(apiPort);
    console.log("Backend is listening on port %d", apiPort);
}

startBackend({
    apiPort,
    dbURL: db.url
})