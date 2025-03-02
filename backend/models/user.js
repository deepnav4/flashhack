const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure usernames are unique
        maxlength: 50 // Limit the length of the username
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure emails are unique
        match: /.+\@.+\..+/ // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length
    },
    currency: {
        type: String,
        required: true,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'Other'], // Example currencies
        default: 'USD' // Default currency
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
        model: {
            type: String,
            enum: ['basic', 'advanced'], // Example AI models
            default: 'basic' // Default AI model
        }
    },
    profilePicture: {
        type: String,
        required: false, // Optional field for profile picture URL
        match: /^(http|https):\/\/[^ "]+$/ // Basic URL validation
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

// Middleware to update the updatedAt field on save
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create the User model
const User = mongoose.model('User ', userSchema);

module.exports = User;