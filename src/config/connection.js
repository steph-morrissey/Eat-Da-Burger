const mysql = require("mysql");
let connection;
// Establishing SQL connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const dbOptions = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "burger_db",
  };

  connection = mysql.createConnection(dbOptions);
}

const onConnect = (err) => {
  if (err) throw err;
  console.log("Connection successful!");
};

connection.connect(onConnect);

module.exports = connection;
