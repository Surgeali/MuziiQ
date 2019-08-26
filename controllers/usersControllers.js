const db = require("../models");
// console.log(db);
// Defining methods for the booksController
module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.Users
            .create(req.body)
            .then(dbModel => 
                {
                    dbModel = dbModel.dataValues;
                    res.json(dbModel)
                })
            .catch(err => res.status(422).json(err));
    }
}