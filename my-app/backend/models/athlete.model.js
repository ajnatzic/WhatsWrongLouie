/**
 * Database schema for athletes
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const athleteSchema = new Schema({
   AID: {type: Number, required: true},
   AthName: {type: String, required: true},
   Race: {type: String, required: true},
   Gender: {type: String, required: true},
   SkColor: {type: String, required: true},
   TshColor: {type: String, required: true},
   PantColor: {type: String, required: true},
   LastInjury: {type: Date, required: true},
   CurrScen: {type: Number, required: true},
   LastScen: {type: Number, required: true},
   CreateDate: {type: Date, required: true},
   PID: {type: Number, required: true}
 }, {
   
   timestamps: false,
 

 });

 const Athlete = mongoose.model('athlete', athleteSchema);

 module.exports = Athlete;