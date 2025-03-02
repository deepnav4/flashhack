import { Schema } from "mongoose";

export const userSchema = Schema({
    userId: {
        type: String,
        required: true
    },
    settings: {
        currency: {},
        displayMode: {}
    }
})