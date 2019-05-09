const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use( express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const title = 'Index';

    res.render('index.ejs', {title: title});
});

app.listen(3000, () => {
    console.log("Project Running on port 3000!");
});