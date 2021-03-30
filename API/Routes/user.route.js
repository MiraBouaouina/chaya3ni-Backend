const express = require('express');
const app = express();
const _ = require('lodash');
const userRoutes = express.Router();
var config = require('../config/config');
let User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
var myPassportService = require('../config/passportconfig')(passport);
var ObjectId = require('mongoose').Types.ObjectId;
userRoutes.post('/register', ctrlUser.register);
userRoutes.post('/authenticate', ctrlUser.authenticate);
module.exports = userRoutes