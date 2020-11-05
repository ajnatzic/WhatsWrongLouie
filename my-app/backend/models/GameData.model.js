/**
 * Database schema for game data objects
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const gameDataSchema = new Schema({
   
 }, {
   
   timestamps: false,
 

 });

 const GameData = mongoose.model('GameData', gameDataSchema);

 module.exports = GameData;