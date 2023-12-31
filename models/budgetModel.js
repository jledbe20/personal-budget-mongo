const mongoose = require("mongoose");

// old schema (doesn't require colors):
// const budgetSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     item: {
//         type: String,
//         required: true,
//         trim: true,
//         uppercase: true
// },
//     cost: {
//         type: Number,
//         required: true
//     }
// }, {collection: 'budget_items'})

const budgetSchema = new mongoose.Schema({
    custom_id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        match: /^#[0-9a-fA-F]{6}$/  // matches hexadecimal colors
    }
}, { collection: 'budget_items' });


module.exports = mongoose.model('BudgetItem', budgetSchema);