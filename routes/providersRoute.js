const express = require("express");
const router = require("express").Router();

const providersController = require("../controller/providersController");

router
    .route("/")
    .get(providersController.getProviders);

router
    .route("/:serviceId")
    .get(providersController.getProvidersForService);

router
    .route("/:id/reviews")
    .get(providersController.getReviews);

router
    .route("/booking/:id/availability")
    .get(providersController.getAvailability);

router
    .route("/:id/booking/confirm")
    .post(providersController.updateBooking);

router  
    .route("/:id/favorite")
    .put(providersController.like);

module.exports = router;
