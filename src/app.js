const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use( express.static(path.join(__dirname, 'public')));
const accountData = fs.readFileSync('src/json/accounts.json', { encoding: 'UTF8' });
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync('src/json/users.json', { encoding: 'UTF8' });
const users = JSON.parse(userData);

app.get('/', (req, res) => {
    const title = 'Account Summary';
    res.render('index', {title: title, accounts: accounts });
});

app.get('/savings', (req, res) => {
    const account = accounts.savings;

    res.render('account', { account: account });
});

app.get('/profile', (req, res) => {
    res.render('profile', { user: users });
});

app.listen(3000, () => {
    console.log("Project Running on port 3000!");
});