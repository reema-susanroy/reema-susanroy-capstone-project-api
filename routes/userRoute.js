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
    .get(userController.getBooking);

// router
//     .route("/:userId/providers/:id/favorite")
//     .get(userController.getFavoriteStatus);
    
// router  
//     .route("/:id/favorite")
//     .put(userController.like);

module.exports = router;
