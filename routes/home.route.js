const express = require('express');
const router = express.Router();

const homeController = require("../controllers/home.controller")


router.route("/").get(homeController.getHome)
router.route("/login").get(homeController.getLogin)


module.exports = router