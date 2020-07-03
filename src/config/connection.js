const mysql = require("mysql");

// Establishing SQL connection
const dbOptions = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "burger_db",
};

const connection = mysql.createConnection(dbOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connection successful!");
};

connection.connect(onConnect);

module.exports = connection;
