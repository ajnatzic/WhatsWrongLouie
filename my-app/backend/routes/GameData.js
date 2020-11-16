const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;
let GameData = require('../models/GameData.model.js');

// handles incoming HTTP GET requests on the /GameData/ url path
router.route('/').get((req, res) => {
  GameData.find()
    .then(gameData => res.json(gameData))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;