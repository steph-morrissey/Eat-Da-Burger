const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/burgers", (req, res) => {
  console.log("av been hit ");
  res.render("burgerDashboard");
});

router.post("/api/burger", async (req, res) => {
  console.log(req.body);
  try {
    const burgerName = "burger_name";
    const burgerValue = req.body.burgerName;
    await burger.insertOne(burgerName, burgerValue, (result) => {
      console.log("burger successfully added");
    });
    res.redirect("/burgers");
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
});

router.put("/api/burger/:id", (req, res) => {
  const fieldName = "burger_name";
  const fieldValue = req.params.updateBurger;
  const id = req.body.id;

  burger.update(fieldName, fieldValue, id, (result) => {
    res.json("successfully updated burger name");
  });
});

module.exports = router;
