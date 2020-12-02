/**
 * Database schema for players
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const playersSchema = new Schema({
   PID: {type: Number, required: true},
   PName: {type: String, required: true},
   Email: {type: String, required: true},
   AthList: {type: Array, required: true},
   LastPlay: {type: Date, required: true},
   IiD: {type: Number, required: true}
 }, {
   
   timestamps: true,
 

 });

 const Players = mongoose.model('players', playersSchema);

 module.exports = Players;