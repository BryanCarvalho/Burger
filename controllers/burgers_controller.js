
let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let burgerhbs = {
            burgers: data
        };
        console.log(burgerhbs);
        res.render("index", burgerhbs);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.redirect('/');
        })
});

router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function (result) {
        res.redirect('/');
    });
});

module.exports = router;