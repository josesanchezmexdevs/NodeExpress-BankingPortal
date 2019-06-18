const express = require('express');
const router = express.Router();
const { accounts, writeJSON } = require('../data');

app.get('/transfer', (req, res) =>  {
    res.render('transfer', {});
});

app.post('/transfer', (req, res) =>  {
    const bodyParams = req.body;
    accounts[bodyParams.from].balance = accounts[bodyParams.from].balance - bodyParams.amount;
    accounts[bodyParams.to].balance = parseInt(accounts[bodyParams.to].balance) + parseInt(bodyParams.amount, 10);
    writeJSON();
    res.render('transfer', { message: "Transfer Completed" });
});

app.get('/payment', (req, res) => {
    res.render('payment', { account: accounts.credit});
});

app.post('/payment', (req, res) => {
    const bodyParams = req.body;
    accounts.credit.balance = accounts.credit.balance - bodyParams.amount;
    accounts.credit.available = parseInt(bodyParams.amount) + parseInt(accounts.credit.available);
    writeJSON();
    res.render('payment', {message: "Payment Successful", account: accounts.credit});
});

module.exports = router;