const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const Folder = require("../../models/Folder");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/newfolder", (req, res) => {

    const newFolder = new Folder({
        user: req.body.user,
        foldername: req.body.foldername,
        description: req.body.description,

    });

    console.log(newFolder);
    newFolder
        .save()
        .then(folder => res.json(folder))
        .catch(err => console.log(err));

});


router.get("/folder/:userid", (req, res) => {

    Folder
        .find({ user: req.params.userid }, "_id foldername description")
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));


});



module.exports = router;

// Form validation

//const { errors, isValid } = validateRegisterInput(req.body);

// Check validation
//if (!isValid) {
//return res.status(400).json(errors);
//}



/* User.findOne({ email: req.body.email }).then(user => {
   if (user) {
     return res.status(400).json({ email: "Email already exists" });
   } else {
   const newUser = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
     });
*/
// Hash password before saving in database
/*      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      }); */
//  }
// });
//});