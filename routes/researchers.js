const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", async (req, res) => {
  try {
    let response = await db.any(`SELECT * FROM researchers`)
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
    let response = await db.one(`SELECT name FROM researchers WHERE id = $1`, req.params.id)
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
    db.none('INSERT INTO researchers(name,job_title) VALUES($1,$2)', req.body.name, req.body.job)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    db.none('UPDATE researchers SET name = $1 job_title = $2 WHERE id = $3', req.body.name, req.body.title, req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    db.none('DELETE FROM researchers WHERE id = $1', req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

module.exports = router