const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
let Ride = new Schema({
    lieu_dep: {
        type: String,
        required: true
    },
    smoking: {
        type: Boolean,
        required: true
    },
    song: {
        type: Boolean,
        required: true
    },
    bag: {
        type: Boolean,
        required: true
    },
    lieu_arr: {
        type: String,
        unique: true,
        required: true
    },
    date_dep: {
        type: String,
        required: true
    },
    nb_places: {
        type: Number,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    id_user: {
        type: String,
        required: true
    },
}, {
    collection: 'ride'
});
module.exports = mongoose.model('Ride', Ride);