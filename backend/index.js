import express from "express";
import { apiPath, apiPort, db } from "../config.js";
import * as models from "./models/index.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { v4 as uuid } from "uuid";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

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
    const sessionId = req.body.sessionId;
    console.log(req.cookies);
    console.log(sessionId);
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
        const transaction = new models.transaction({
            amount,
            category,
            date,
            description,
            type,
            user: user.id
        });
        await transaction.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, passwordHash } = req.body;

    const userData = await models.user.findOne({
        email,
        passwordHash
    });

    if (!userData) return res.sendStatus(401);

    const sessionId = uuid();

    await models.auth.findOneAndUpdate(
        { email },
        { currentSession: sessionId },
        { upsert: true }
    );

    res.cookie("sessionId", sessionId, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60)
    });

    res.status(200).json({ sessionId });
});

router.post("/signup", async (req, res) => {
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
    res.cookie("sessionId", sessionId)

    if (userData) return res.sendStatus(409);

    const user = new models.user({
        email,
        meta: {
            username,
            profilePicture
        }
    });

    await user.save();

    models.auth.create({
        email,
        passwordHash,
        currentSession: sessionId
    })

    res.json({
        email, username, profilePicture, sessionId
    })
});

app.use(router);

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

export default router;