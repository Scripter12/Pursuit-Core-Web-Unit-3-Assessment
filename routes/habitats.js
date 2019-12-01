const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", async (req, res) => {
  try {
    let response = await db.any('SELECT * FROM habitats')
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
    let response = await db.one('SELECT category FROM habitats WHERE id = $1', req.params.id)
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

router.post("/", async (req, res) => {
  try {
    await db.none('INSERT INTO habitats(category) VALUES($1)', req.body.category)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})



module.exports = router