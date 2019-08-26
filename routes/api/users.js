const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// matches with "/api/users"
router.route("/")
    .post(usersController.create);