const express = require("express");
const router = express.Router();
const db = require("./db")

router.get("/", (req, res) => {
db.get("/")
})

router.get("/:id", (req, res) => {

})

router.post("/", (req, res) => {

})

router.patch("/:id", (req, res) => {

})

router.delete("/:id", (req, res) => {

})

module.exports = router

