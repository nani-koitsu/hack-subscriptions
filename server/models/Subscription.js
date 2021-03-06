const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

let SubSchema = new Schema({
    name: { type: String, trim: true, required: true, default: '' },
    amount: { type: Number, require: true, default: 0 },
    dueDate: { type: Date, default: '' },
    image: { type: String, default: '' },
    timestamp: { type: String, default: moment.format("dddd, MMMM Do YYYY, h:mm:ss a") }
});

module.exports = mongoose.model('Subs', SubSchema);