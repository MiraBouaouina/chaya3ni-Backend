const express = require('express');
const app = express();
const rideRoutes = express.Router();
var config = require('../config/config');
let Ride = require('../models/ride');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const ctrlRide = require('../Controllers/ride.controller');
const jwtHelper = require('../config/jwtHelper');
var ObjectId = require('mongoose').Types.ObjectId;
rideRoutes.post('/add', ctrlRide.add);
rideRoutes.post('/fetchId', ctrlRide.fetchId);
module.exports = rideRoutes