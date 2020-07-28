const connection = require("./connection.js");

// Select all burgers from the db
const selectAll = (table, cb) => {
  const query = `SELECT * FROM ${table}`;
  const onQuery = (err, rows) => {
    if (err) throw err;
    console.table(rows);
  };
  connection.query(query, onQuery);
};

// Insert a new burger into the db
const insertOne = (table, fieldName, fieldValue, cb) => {
  const query = `INSERT INTO ${table}(${fieldName}) VALUES ${fieldValue}`;
  const onQuery = (err, rows) => {
    if (err) throw err;
    console.table(rows);
  };

  connection.query(query, onQuery);
};

// Update an existing burger in the db
const updateOne = (table, fieldName, fieldValue, id, cb) => {
  const query = `UPDATE ${table} SET ${fieldName}=${fieldValue} WHERE id=${id}`;
  const onQuery = (err, rows) => {
    if (err) throw err;
    console.table(rows);
  };

  connection.query(query, onQuery);
};

const orm = {
  selectAll,
  insertOne,
  updateOne,
};

module.exports = orm;
