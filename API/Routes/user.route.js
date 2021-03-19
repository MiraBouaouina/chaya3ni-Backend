const express = require('express');
const app = express();
const _ = require('lodash');
let userRoutes = express.Router();
var config = require('../config/config');
let User = require('../models/user');
let Contact = require('../models/contact');
let Partenaire = require('../models/partenaire');
let Promotion = require('../models/promotion');
let Profit = require('../models/profit');
let Categorie = require('../models/categorie');
let Favoris = require('../models/favoris');
let Commentaire = require('../models/commentaire');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
var myPassportService = require('../config/passportconfig')(passport);
var ObjectId = require('mongoose').Types.ObjectId;
userRoutes.route('/add').post(function (req, res) {
  var user = new User({
    fullName: req.body.name,
    email: req.body.email,
    password: User.hashPassword(req.body.password),});
  user.save()
    .then(user => {
      res.status(200).json({'user': 'ajout d utilisateur terminee'});
    })
    .catch(err => {
    res.status(400).send("erreur");
    });
});
userRoutes.post('/login',(req,res,next)=>{
  passport.authenticate('local', (err, user, info)=> {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    if (user) return res.status(200).json({ "token": user.generateJwt() });
    else return res.status(401).json(info);
})(req, res);
});
userRoutes.get('/user',isValidUser,function(req,res,next){
  return res.status(200).json(req.user);
});
userRoutes.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

function isValidUser(req,res,next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message:'Unauthorized Request'});
}
userRoutes.post('/register', ctrlUser.register);
userRoutes.post('/signin', ctrlUser.authenticate);
userRoutes.post('/authenticate', ctrlUser.authenticate);
//userRoutes.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
module.exports = userRoutes;
// Defined get data(index or listing) route
userRoutes.post('/editProfile/:id',  function (req, res) {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`aucun id trouvee : ${req.params.id}`);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.mdp, salt, (err, hash) => {
           let  nmdp = hash;
            this.saltSecret = salt;
            var user = {
              fullName: req.body.name,
              email: req.body.email,
              datenaiss: req.body.dnaiss,
              Numtel: req.body.tel,
              password: nmdp};
          User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in  Update :' + JSON.stringify(err, undefined, 2)); }
        });
        });
    });

});
userRoutes.post('/editProfile2/:id',  function (req, res) {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`aucun id trouvee : ${req.params.id}`);
      var user = {
        fullName: req.body.name,
        email: req.body.email,
        datenaiss: req.body.dnaiss,
        Numtel: req.body.tel,};
    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in  Update :' + JSON.stringify(err, undefined, 2)); }
  });
});
// Defined edit route
userRoutes.route('/edit/:email').get(function (req, res) {
  let email = req.params.email;
  User.findById(email, function (err, user){
      res.json("existe");
  });
});
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
userRoutes.get('/getprom',  function(req, res) {
  Promotion.find(function (err, promotion) {
    if (err) {res.send('error');
  next();}
    res.json(promotion);
  });

})
userRoutes.get('/userProfile', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    jwt.verify(token, config.secret,
      (err, decoded) => {
          if (err)
              return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
          else {
            User.findOne({ _id: decoded._id },
              (err, user) => {
                  if (!user)
                      return res.status(404).json({ status: false, message: 'User record not found.' });
                  else
                      return res.json(user);
              });}});}});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, next, user) {
    if (!user)
      return next(new Error('erreur'));
    else {
        user.name = req.body.name;
        user.email = req.body.email;
        user.motdepasse = req.body.motdepasse;

        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
userRoutes.route('/message').post(function (req, res) {
  req.body.date= Date.now();
  var contact = new Contact({
    sujet: req.body.sujet,
    email: req.body.email,
    id_user: req.body.id,
    name_user: req.body.name,
    message:req.body.msg,
    date:req.body.date,
  });
  contact.save()
    .then(contact => {
      res.status(200).json({'contact': 'ajout d un message terminee'});
    })
    .catch(err => {
    res.status(400).send("erreur");
    });
});
userRoutes.route('/comment').post(function (req, res) {
  req.body.date= Date.now();
  var commentaire = new Commentaire({
    Commentaire: req.body.commentaire,
    rate: req.body.rate,
    id_user: req.body.id,
    name_user: req.body.name,
    id_prom:req.body.idp,
    date:req.body.date,
  });
  commentaire.save()
    .then(commentaire => {
      res.status(200).json("reussi");
    })
    .catch(err => {
    res.status(400).send("erreur");
    });
});
userRoutes.get('/getpart',  function(req, res) {
  Partenaire.find(function (err, partenaire) {
    if (err) {res.send('error');
  next();}
    res.json(partenaire);
  });
})
userRoutes.get('/prom/:id',  function(req, res) {
  Promotion.findById(req.params.id,function (err, doc) {
    if (err) {res.send('erreurr');
  next();}
    res.json(doc);
  });
})
userRoutes.route('/addprof').post(function (req, res) {
  Profit.findOne({idpromo: req.body.proid,
                  iduser: req.body.userid}, function(err, profit){
    var message;
        if(profit) {
          console.log(profit)
            message = "ça existe";
            console.log(message);
        }
        else {
          var profit = new Profit({
            idpromo: req.body.proid,
            iduser: req.body.userid,
            date:Date.now(),
          });
          profit.save()
          .then(profit => {
            res.status(200).json({'contact': 'ajout d un message terminee'});
            console.log('ajout d un message terminee');
          })
          .catch(err => {
          res.status(400).send("erreur");
          console.log('erreur');
          });
      }
  })
})
userRoutes.get('/getprofit/:id',  function(req, res) {
  Profit.find({idpromo : req.params.id}).count(function(err, count){
    if (err) {res.send('error');
  next();}
    res.json(count)
  });
})
userRoutes.get('/getcomment/:id',  function(req, res) {
  Commentaire.find({id_prom : req.params.id},function (err, commentaire) {
    if (err) {res.send('error');
  next();}
    res.json(commentaire);
  });
})
userRoutes.route('/addfav').post(function (req, res) {
  Favoris.findOne({id_prom: req.body.proid,
                  id_user: req.body.userid}, function(err, favoris){
    var message;
        if(favoris) {
          console.log(favoris)
            message = "ça existe";
            console.log(message);
            res.json("erreur");
        }
        else {
          var favoris = new Favoris({
            id_prom: req.body.proid,
            id_user: req.body.userid,
          });
          favoris.save()
          .then(favoris => {
            res.status(200).json({'reussi':'ok'});
            console.log('ajout  terminee');
          })
          .catch(err => {
          res.status(400).send("erreur");
          console.log('erreur');
          });
      }
  })
})
userRoutes.post('/isfav',function (req, res) {
  Favoris.findOne({id_user:req.body.userid,id_prom:req.body.proid},function(err, favoris){
      if (err) {res.send('error');
      next();}
        res.json(favoris);
})});
userRoutes.route('/delfav/:id').delete(function (req, res) {
  Favoris.findByIdAndRemove({_id: req.params.id}, function(err, favoris){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});
userRoutes.get('/getfav',  function(req, res) {
  Favoris.find(function (err, favoris) {
    if (err) {res.send('error');
  next();}
    res.json(favoris);
  });
})
userRoutes.get('/getcat',  function(req, res) {
  Categorie.find(function (err, categorie) {
    if (err) {res.send('error');
  next();}
    res.json(categorie);
  });
})