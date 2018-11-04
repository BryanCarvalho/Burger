
let connection = require("./connection.js");

let orm = {
    selectAll: function (tableInput) {
        let query = "SELECT burger_name FROM ??";
        connection.query(query, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (tableInput, burgerName) {
        let query = "INSERT INTO ?? (burger_name) VALUES (?);";
        connection.query(query, [tableInput, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (tableInput, eaten) {
        let query = "UPDATE ?? SET devoured = ?";
        connection.query(query, [tableInput, eaten], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm; 