const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", async (req, res) => {
  try {
    let response = await db.any(`SELECT * FROM species`)
    res.json({
      message: response
    })
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    let response = await db.one("SELECT name FROM species WHERE id = $1", req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.post("/", async (req, res) => {
  try {
    await db.none(`INSERT INTO species(name,is_mammal) VALUES($1,$2)`, req.body.name, req.body.ismam)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

module.exports = router