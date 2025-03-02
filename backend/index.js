import express from "express";
import { apiPath, apiPort } from "../config.js";

const app = express();
app.use(express.json());

app.post(apiPath + "/addTransaction", async (req, res) => {
    
})

app.listen(apiPort);