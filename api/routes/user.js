const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/user");
const UsersController = require('../controllers/user');


router.post("/signup" , UsersController.signup_user );
router.get("/signup" , UsersController.get_signup);




module.exports = router;
