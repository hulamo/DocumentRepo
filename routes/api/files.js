'use strict';

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var multer = require('multer')
var cors = require('cors');
const keys = require("../../config/keys");
const passport = require("passport");
const images = require('./images')
var ObjectId = require('mongodb').ObjectId;

//function getModel () {
//return require(`./model-${require('../config').get('DATA_BACKEND')}`);
//}


// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const File = require("../../models/File");

//router.use(bodyParser.urlencoded({ extended: false }));



router.use(bodyParser.urlencoded({ extended: false }))

router.use(cors())
    /*
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'public')
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })

    var upload = multer({ storage: storage }).single('file')
    */
router.post(
    '/add',

    images.multer.single('file'),
    images.sendUploadToGCS,
    (req, res, next) => {
        let data = req.body;
        //   console.log("data: " + data)
        // Was an image uploaded? If so, we'll use its public URL
        // in cloud storage.
        if (req.file && req.file.cloudStoragePublicUrl) {
            data.imageUrl = req.file.cloudStoragePublicUrl;
        }
        console.log(req.file.cloudStoragePublicUrl);
        data.fileglink = req.file.cloudStoragePublicUrl;
        const newFile = new File(data)
        newFile
            .save()
            .then(file => res.json(file))
            .catch(err => console.log(err));

        // Save the data to the database.

        /*getModel().create(data, (err, savedData) => {
          if (err) {
            next(err);
            return;
          }
          res.redirect(`${req.baseUrl}/${savedData.id}`);
        });*/
    }
);

router.post('/upload', function(req, res) {

    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});

// @route POST api/users/register
// @desc Register user
// @access Public
//images.multer.single('image'), images.sendUploadToGCS,
router.post("/newfile", (req, res, next) => {

    const data = new formData();
    data = req;
    console.log("req: " + data.get("user"))
        /*const newFile = new File({
            user: req.body.user,
            folder: "5d3f3d02fba8835888cfdb76",
            filename: "Nombre de Archivo",
            filelink: "prueba ", // req.file.cloudStoragePublicUrl,
            description: req.body.description,

        });*/

    const newFile = new File(req);
    // console.log(newfile)
    console.log("nweFile files.js" + newFile);
    newFile
        .save()
        .then(file => res.json(file))
        .catch(err => console.log(err));

});


router.get("/file/:userid", (req, res) => {

    File
        .find({ user: ObjectId(req.params.userid) }, "_id filename filedescription")
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