/**
 * Database schema for scenarios
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const scenarioSchema = new Schema({
   SID: {type: Number, required: true},
   SName: {type: String, required: true},
   SReveiw: {type: String, required: true},
   SCreated: {type: Date, required: true},
   LastEdited: {type: Date, required: true},
   SCat: {type: Array, required: true},
   SData: {type: Object, required: true}
 }, {
   
   timestamps: true,
 

 });

 const Players = mongoose.model('players', superUserSchema);

 module.exports = Players;