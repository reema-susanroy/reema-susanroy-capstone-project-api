const express = require("express");
const router = require("express").Router();

const servicesController = require("../controller/servicesController");

router
    .route("/")
    .get(servicesController.getServices);

router
    .route("/:id")
    .get(servicesController.getOneService);

module.exports = router;
