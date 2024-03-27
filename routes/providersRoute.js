const express = require("express");
const router = require("express").Router();

const providersController = require("../controller/providersController");

router
    .route("/")
    .get(providersController.getProviders);

router
    .route("/provider/:id")
    .get(providersController.getProviderDetails);

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

router
    .route("/users/favorite")
    .get(providersController.getLikes);

    
module.exports = router;
