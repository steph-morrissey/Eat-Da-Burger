const orm = require("../config/orm");

const selectAll = (cb) => {
  orm.selectAll("burgers", (res) => {
    cb(res);
  });
};

const insertOne = (fieldName, fieldValue, cb) => {
  orm.insertOne("burgers", fieldName, fieldValue, (res) => {
    cb(res);
  });
};

const updateOne = (fieldName, fieldValue, id, cb) => {
  orm.updateOne("burgers", fieldName, fieldValue, id, (res) => {
    cb(res);
  });
};

const burger = {
  selectAll,
  insertOne,
  updateOne,
};

module.exports = burger;
