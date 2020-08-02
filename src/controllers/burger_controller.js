const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/burgers", (req, res) => {
  const selectAllCallback = (burgers) => {
    res.render("burgerDashboard", { burgers });
  };

  burger.selectAll("burgers", selectAllCallback);
});

router.post("/api/burger", (req, res) => {
  const burgerName = "burger_name";
  const burgerValue = req.body.burgerName;
  burger.insertOne(burgerName, burgerValue, (result) => {
    console.log("burger successfully added");
    res.redirect("/burgers");
  });
});

router.put("/api/burger/:id", (req, res) => {
  const fieldName = "devoured";
  const fieldValue = true;
  const id = req.params.id;

  console.log("ID", id);

  burger.updateOne(fieldName, fieldValue, id, (result) => {
    console.log("successfully updated");
  });
});

module.exports = router;
