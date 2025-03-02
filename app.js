const mongoose = require('mongoose');

// Define the transaction schema
const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User ' // Assuming you have a User model
    },
    amount: {
        type: Number,
        required: true,
        min: 0 // Amount should be non-negative
    },
    category: {
        type: String,
        required: true,
        enum: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'] // Example categories
    },
    description: {
        type: String,
        required: false, // Optional field
        maxlength: 255 // Limit the length of the description
    },
    date: {
        type: Date,
        required: true,
        default: Date.now // Default to current date
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'Other'] // Example payment methods
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

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Export the model (if needed)
module.exports = Transaction;