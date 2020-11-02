const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;
let SUser = require('../models/SUser.model');

// handles incoming HTTP GET requests on the /athlete/ url path
router.route('/').get((req, res) => {
  SUsers.find()
    .then(susers => res.json(susers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /athlete/ath_create/
router.route('/SUser_create').post((req, res) => {

  //gathering user input from athlete creation screen
  var SUID = setID();
  var SUName;
  var PlayerList = [];
  var LastPlay = new Date();

  const newSUser = new SUser({
      SUID,
      SUName,
      PlayerList,
      LastPlay
  });

  console.log(SUser);
  
  newSUser.save()
    .then(() => res.json('Super User added!'))
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
    const collection = db.collection("SUser");

    try{

        ID = 30000000 +  collection.countDocuments();

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