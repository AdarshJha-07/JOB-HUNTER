var mysql = require("mysql2")

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aj99matdbg@123",
    database: "jobnotifier"
}).promise()

module.exports = conn