const orm = require("../config/orm");

const selectAll = (table, cb) => {
  const onSuccess = (res) => {
    cb(res);
  };
  orm.selectAll("burgers", onSuccess);
};

const insertOne = (fieldName, fieldValue, cb) => {
  const onSuccess = (res) => {
    cb(res);
  };
  orm.insertOne("burgers", fieldName, fieldValue, onSuccess);
};

const updateOne = (fieldName, fieldValue, id, cb) => {
  const onSuccess = (res) => {
    cb(res);
  };
  orm.updateOne("burgers", fieldName, fieldValue, id, onSuccess);
};

const burger = {
  selectAll,
  insertOne,
  updateOne,
};

module.exports = burger;
