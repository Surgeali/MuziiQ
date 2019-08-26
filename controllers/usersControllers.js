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
    },
    findOne: function (req, res) {
        console.log(req.body);
        const {username, password} = req.body;
        db.Users
            .findOne({where: {username, password}})
            .then(dbModel => 
                {
                    console.log('\n FINDONE RESPONSE \n', dbModel);
                    // dbModel = dbModel.dataValues;
                    // res.json(dbModel)
                })
            .catch(err => res.status(422).json(err));
    }
}