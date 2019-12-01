const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", async (req, res) => {
  try {
    let response = await db.any(`SELECT * FROM animals`)
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
    let response = await db.any('SELECT nickname FROM animals WHERE id = $1', req.params.id)
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
    await db.none(`INSERT INTO animals(species_id,nickname) VALUES($1,$2)`, req.body.spec, req.body.nick)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    await db.none('UPDATE animals SET species_id = $1 , nickname = $2 WHERE id = $3', req.body.spec, req.body.nickname, req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await db.none('DELETE FROM animals WHERE id = $1', req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

module.exports = router


