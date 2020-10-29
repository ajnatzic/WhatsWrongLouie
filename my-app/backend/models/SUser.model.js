/**
 * Database schema for Super Users
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const superUserSchema = new Schema({
   SUID: {type: Number, required: true},
   SUName: {type: String, required: true},
   PlayerList: {type: Array, required: true},
   LastPlay: {type: Date, required: true}
 }, {
   
   timestamps: true,
 

 });

 const SUser = mongoose.model('SUser', superUserSchema);

 module.exports = SUser;