const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const studentSchema = new Schema({
    ID: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    
}, {timestamps: true});

const studentEntry = mongoose.model('Student entry', studentSchema);
module.exports = studentEntry

