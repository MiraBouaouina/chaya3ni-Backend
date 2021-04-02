const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const passport = require('passport');
const _ = require('lodash');
var config = require('../config/config');
const User = mongoose.model('User');
var jwt = require('jsonwebtoken');
module.exports.register = (req, res, next) => {
  var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.birthdate = req.body.birthdate;
  user.phone = req.body.phone;
  user.password = req.body.password;
  user.save((err, doc) => {
    if (!err)
      res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(['email']);
      else
        return next(err);
    }

  });
}

module.exports.authenticate = (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({ success: false, msg: 'utilisateur non trouvee.' });
    } else {
      // check if password matches
      if (user.verifyPassword(req.body.password)) {

        var token = jwt.sign(user.toJSON(), config.secret);
        // return the information including token as JSON
        return res.json({ success: true, token: 'JWT ' + token });
      } else {
        return res.status(401).send({ success: false, message: 'mot de passe incorrecte' });
      }
    }
  });
}
module.exports.updatepwd = (req, res, next) => {
  User.findById({
    _id: req.body.id

  }, function (err, user) {

    if (err) throw err;
    if (user.verifyPassword(req.body.password)) {
      //update password
      User.findByIdAndUpdate(_id, { password: req.body.newpassword },
        function (err, docs) {
          if (err) {
            console.log(err)
          }
          else {
            console.log("Updated User password : ", docs);
          }
        });
      return res.json({ message: 'password updated successfully' });

    }
    else {
      return res.status(401).send({ success: false, message: 'mot de passe incorrecte' });

    }
  });
}
