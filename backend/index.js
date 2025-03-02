import express from "express";
import { apiPath, apiPort, db } from "../config.js";
import * as models from "./models/index.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());
app.use(cookieParser())

app.post(apiPath + "/fetchTransaction/all", async (req, res) => {
    const sessionId = req.cookies.sessionId;
    const userAuth = await models.auth.findOne({
        currentSession: sessionId,
    })

    if (!userAuth) return res.sendStatus(401);

    const user = await models.user.findOne({
        email: userAuth.email
    });

    if (!user) return res.sendStatus(401);

    const transactions = await models.transaction.find({
        user: user.id
    });

    return res.json(transactions);
});

app.post(apiPath + "/addTransaction/", async (req, res) => {
    const sessionId = req.cookies.sessionId;
    const userAuth = await models.auth.findOne({
        currentSession: sessionId,
    })

    if (!userAuth) return res.sendStatus(401);

    const {
        date,
        description,
        category,
        amount,
        type,
    } = req.body;

    const user = await models.user.findOne({
        email: userAuth.email
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
        passwordHash
    } = req.body;

    const userData = await models.user.findOne({
        email,
        passwordHash
    })

    if (!userData) res.send(401);

    const sessionId = uuid();

    res.cookie("sessionId", sessionId, {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 60
    })
    res.json({
        sessionId
    })
})

app.post(apiPath + "/signup", async (req, res) => {
    const {
        email,
        passwordHash,
        username,
        profilePicture
    } = req.body;

    const userData = await models.user.findOne({
        email
    });

    const sessionId = uuid();
    res.cookie("sessionId", sessionId, {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 60
    })

    if (userData) return res.sendStatus(409);

    models.user.create({
        email,
        meta: {
            username,
            profilePicture
        }
    }).save();

    models.auth.create({
        email,
        passwordHash,
        currentSession: sessionId
    })

    res.json({
        email, username, profilePicture, sessionId
    })
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