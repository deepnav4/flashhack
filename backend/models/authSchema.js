import { model, Schema } from "mongoose";

export const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    currentSession: {
        type: String
    }
})

export const auth = model("Auth", authSchema);