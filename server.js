const express = require('express');
const app = express();
const cors = require('cors');
const animalsRouter = require('./routes/animals')
const speciesRouter = require('./routes/species')
const researchersRouter = require('./routes/researchers')
const habitatsRouter = require('./routes/habitats')
const sightingsRouter = require('./routes/sightings')
const port = 3000;
app.use(cors)
app.use(express.json())

app.use(express.urlencoded({
  extended: false
}))
app.use('/researchers', researchersRouter)
app.use('/species', speciesRouter)
app.use('/animals', animalsRouter)
app.use('/habitats', habitatsRouter)
app.use('/sightings', sightingsRouter)


app.listen(port, () => {
  console.log("server running")
})