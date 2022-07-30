"use strict"
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes/routes')(app);
const port = 3000


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

