const express = require("express");
const router = require("express").Router();
const userController = require("../controller/usersController");

router
    .route("/login")
    .post(userController.userLogin);


module.exports = router;
