/**
 * Database schema for game data objects
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 // Super User Schema Object
 const gameDataSchema = new Schema({
   
      PrioInjuryList: {type: Object, required: false},
      PalpationList: {type: Object, required: false},
      ObservationList: {type: Object, required: false},
      SpecialTestList: {type: Object, required: false},
      DislocationList: {type: Object, required: false},
      SprainList: {type: Object, required: false},
      StrainList: {type: Object, required: false},
      FractureList: {type: Object, required: false},
      itisList: {type: Object, required: false}


 }, {
   
   timestamps: false,
   collection: 'GameData'
 

 });

 const GameData = mongoose.model('GameData', gameDataSchema);

 module.exports = GameData;