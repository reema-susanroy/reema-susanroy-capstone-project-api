const express = require("express");
const router = require("express").Router();
const userController = require("../controller/usersController");

router
    .route("/login")
    .post(userController.userLogin);


router
    .route("/register")
    .post(userController.userRegister);

router
    .route("/manage-booking/:id")
    .get(userController.getBooking)
    .delete(userController.deleteBooking);

router
    .route("/:id")
    .get(userController.getUserDetails)
    .post(userController.postUserDetails);
    

module.exports = router;
