const mongoose = require('mongoose');
var config = require('../config/config');
const Ride = mongoose.model('Ride');
const User = mongoose.model('User');

var jwt = require('jsonwebtoken');
module.exports.add = (req, res, next) => {
    var ride = new Ride();

    ride.song = req.body.song;
    ride.smoking = req.body.smoking;
    ride.bag = req.body.bag;
    ride.lieu_dep = req.body.lieu_dep;
    ride.lieu_arr = req.body.lieu_arr;
    ride.id_user = req.body.id_user;
    ride.date_dep = req.body.date_dep;
    ride.nb_places = req.body.nb_places;
    ride.prix = req.body.prix;

    ride.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}

module.exports.fetchId = (req, res) => {
    Ride.findById({
        _id: req.body.id
    }, function (err, ride) {
        if (err) throw err;
        if (!ride) {
            res.status(401).send({ success: false, msg: 'ride unavailable.' });
        } else {
            return res.json(ride);
        }
    });
}

/*module.exports.fetchRecommanded = (req, res) => {
    Ride.findById({
        _id: req.body.id
    }, function (err, ride) {
        if (err) throw err;
        if (!ride) {
            res.status(401).send({ success: false, msg: 'ride unavailable.' });
        } else {
            return res.json(ride);
        }
    });
}*/



