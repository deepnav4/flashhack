import { Schema, model } from 'mongoose';

// Define the user schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensure emails are unique
        match: /.+\@.+\..+/ // Basic email validation
    },
    meta: {
        username: {
            type: String,
            required: true,
            unique: true, // Ensure usernames are unique
            maxlength: 50 // Limit the length of the username
        },
        profilePicture: {
            type: String,
            required: false, // Optional field for profile picture URL
            match: /^(http|https):\/\/[^ "]+$/ // Basic URL validation
        },
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    settings: {
        currency: {
            type: String,
            required: true,
            enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'Other'], // Example currencies
            default: 'INR' // Default currency
        },
        displayMode: {
            type: String,
            required: true,
            enum: ['light', 'dark'], // Only allow light or dark mode
            default: 'light' // Default display mode
        },
        aiPreferences: {
            enabled: {
                type: Boolean,
                default: false // Default to AI disabled
            },
            plan: {
                type: String,
                enum: ['basic', 'advanced'], // Example AI models
                default: 'basic' // Default AI model
            }
        },
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the creation date
    },
    updatedAt: {
        type: Date,
        default: Date.now // Automatically set the update date
    }
});

export const user = model('User ', userSchema);