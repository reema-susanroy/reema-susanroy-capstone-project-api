const express = require("express");
const router = require("express").Router();
const userController = require("../controller/usersController");

router
    .route("/login")
    .post(userController.userLogin);


    router
    .route("/register")
    .post(userController.userRegister);

module.exports = router;
