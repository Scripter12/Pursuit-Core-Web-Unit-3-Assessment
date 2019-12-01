const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", async (req, res) => {
  try {
    let response = await db.any('SELECT * FROM sightings')
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

router.get("/species/:id", async (req, res) => {
  try {
    let response = await db.any('SELECT * FROM sightings WHERE species_id = $1', req.params.id)
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

router.get("/researchers/:id", (req, res) => {
  try {
    let response = await db.any('SELECT * FROM sightings WHERE researcher_id = $1', req.params.id)
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

router.get("/habitats/:id", (req, res) => {
  try {
    let response = await db.any('SELECT * FROM sightings WHERE habitat_id = $1', req.params.id)
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
    await db.none('INSERT INTO sightings(researcher_id,species_id,habitat_id) VALUES($1,$2,$3)', req.body.researcher, req.body.spieces, req.body.habitat)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await db.none('DELETE FROM sightings WHERE id = $1', req.params.id)
  }
  catch (err) {
    res.json({
      error: err
    })
  }
})

module.exports = router