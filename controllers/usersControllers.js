const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbMode => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}