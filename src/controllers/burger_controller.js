const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const handleOptions = {
      burgers: data,
    };
  });
});

router.post("/api/burger", (req, res) => {
  const burgerName = "burger_name";
  const burgerValue = req.body.name;
  burger.create(burgerName, burgerValue, (result) => {
    res.json("successfully inserted your burger");
  });
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
