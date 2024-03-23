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

module.exports = router;
