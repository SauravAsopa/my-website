const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes');


app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sauravgiet:" + process.env.MONGO_ATLAS_PW + "@cluster0-d1fjy.mongodb.net/my-website?retryWrites=true&w=majority")
  .then(
    () => {
      console.log("connected to db");
    })
  .catch(
    () => {
      console.log("connection failed");
    }
  )

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,PUT,DELETE,OPTIONS");
  next();
})

app.use('/api', userRoutes);

module.exports = app;
