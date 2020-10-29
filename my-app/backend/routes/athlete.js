const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;
let Athlete = require('../models/athlete.model.js');

// handles incoming HTTP GET requests on the /athlete/ url path
router.route('/').get((req, res) => {
  Athlete.find()
    .then(athlete => res.json(athlete))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /athlete/ath_create/
router.route('/ath_create').post((req, res) => {

  //gathering user input from athlete creation screen
    var inID = setID();
    var inName = req.body.name;
    var inRace = req.body.race;
    var inGender = req.body.gender;
    var inSkColor = req.body.skinColor;
    var inShColor = req.body.shirtColor;
    var inPantColor = req.body.pantColor;
    var inLastInjury = new Date();
    var inCurrScen = 00000000;
    var inLastScen = 00000000;
    var inCreateDate = new Date();
    var inPriorInj = req.body.priorInjury;

  const newAthlete = new Athlete({
      inID,
      inName,
      inRace,
      inGender,
      inSkColor,
      inShColor,
      inPantColor,
      inLastInjury,
      inCurrScen,
      inLastScen,
      inCreateDate,
      inPriorInj,
  });

  console.log(newAthlete);

  newAthlete.save()
    .then(() => res.json('athlete added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 *  Function used to create an object ID that matches the database parameters.
 *  Based on the collection name being passed in, the function will search said
 *  collection to get the total number of objects in the collection, which will
 *  then be used to created the new object ID. 
 * 
 *  example: If athlete has 4 objects listed, then the new object inserted will
 *  have the set ID: 20000005. No IDs will repeat in the list. 
 *  
 *  Players:    ID is an 8 digit int starting with 1. (1xxxxxxx)
 *  Athletes: ID is an 8 digit int starting with 2. (2xxxxxxx)
 *  Super Users: ID is an 8 digit int starting with 3. (3xxxxxxx)
 *  Scenarios: ID is an 8 digit int starting with 4. (4xxxxxxx)
 * 
 *  @return integer of the newly created ID.
 * 
 */
function setID(){

    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    //var to focus on the specific collection passed in
    const collection = db.collection("athlete");

    try{

        ID = 20000000 +  collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = collection.find().project({AID: 1} ).map(x => x.AID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
  }
  catch{

  }
  finally{
    return ID;
  }
}

module.exports = router;