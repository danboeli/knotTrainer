const { urlencoded } = require('express');
const mongoose = require('mongoose');

const KnotSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Knot', KnotSchema);