const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Add a transaction
router.post('/addTransaction', async (req, res) => {
    const { userId, amount } = req.body;
    const transaction = new Transaction({ userId, amount });
    await transaction.save();
    res.status(201).json(transaction);
});

// Fetch a transaction by ID
router.get('/fetchTransaction/:transactionId', async (req, res) => {
    const transaction = await Transaction.findById(req.params.transactionId);
    if (transaction) {
        res.json(transaction);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

// Fetch all transactions
router.get('/fetchTransaction/all', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

// Fetch transactions with filters
router.post('/fetchTransaction/filter', async (req, res) => {
    const { time, amount } = req.body;
    const filteredTransactions = await Transaction.find({
        date: { $gte: new Date(time.from), $lte: new Date(time.to) },
        amount: { $gte: amount.min, $lte: amount.max }
    });
    res.json(filteredTransactions);
});

// Fetch stats with filters
router.post('/stats/filter', async (req, res) => {
    const { time } = req.body;
    const filteredTransactions = await Transaction.find({
        date: { $gte: new Date(time.from), $lte: new Date(time.to) }
    });
    const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
    res.json({ totalTransactions: filteredTransactions.length, totalAmount });
});

module.exports = router;