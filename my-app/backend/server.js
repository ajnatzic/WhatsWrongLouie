/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/30/2020
 * 
 */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware to parse JSON
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/user_test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Load routers from their respective files
const athleteRouter = require('./routes/athlete');
const playersRouter = require('./routes/players');
const scenarioRouter = require('./routes/scenario');
const SUserRouter = require('./routes/SUser');
const GameDataRouter = require('./routes/GameData');

// adding routers as middleware
app.use('/athlete', athleteRouter);
app.use('/players', playersRouter);
app.use('/scenario', scenarioRouter);
app.use('/SUser', SUserRouter);
app.use('/GameData', GameDataRouter);

// Server connecting
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  alert("Welcome, " + profile.getName() + "! Let's fix some athletes.");
}