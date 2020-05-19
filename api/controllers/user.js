const mongoose = require("mongoose");
const User = require("../models/user");


exports.signup_user = (req,res,next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } 
       else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName : req.body.firstName,
              lastName : req.body.lastName,
              phone : req.body.phone,
              city : req.body.city,
              email: req.body.email,
              password: req.body.password
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
};


exports.get_signup = (req,res,next) => {
    User.find()
    .select("email password")
    .then(docs => {
      const response = {
        count: docs.length,
        user: docs.map(doc => {
          return {
            email : doc.email,
            password : doc.password
            // request: {
            //   type: "GET",
            //   url: "http://localhost:3000/signup/" + doc._id
            // }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
};