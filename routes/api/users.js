const router = require("express").Router();
const usersController = require("../../controllers/usersControllers")

// matches with "/api/users"
router.route("/register")
    .post(usersController.create);

router.route("/signin")
    .post(usersController.findOne);
    


module.exports = router;