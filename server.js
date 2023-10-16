const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const BudgetItem = require('./models/budgetModel');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use('/', express.static('public'));
app.use(express.json());

// const budget_file = require("./budget.json");
// const budget_file2 = require("./budget2.json");
// var budget = budget_file;
// var budget2 = budget_file2;

const url = 'mongodb://localhost:27017/budget';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database.");
}).catch(error => {
    console.error("Error connecting to the database:", error);
});

app.get('/budget', async (req, res) => {
    try {
        const data = await BudgetItem.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/budget', async (req, res) => {
    const newItem = new BudgetItem({
        custom_id:  req.body.custom_id,
        title:      req.body.title,
        value:      req.body.value,
        color:      req.body.color
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// trying to accept array as POST and InsertMany (fail):
// app.post('/budget', async (req, res) => {
//     const items = req.body;

//     if (!Array.isArray(items)) {
//         return res.status(400).json({ message: "Expected an array of items." });
//     }

//     try {
//         const savedItems = await BudgetItem.insertMany(items);
//         res.status(201).json(savedItems);
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({ message: err.message });
//     }
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
