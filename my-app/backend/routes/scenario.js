const router = require('express').Router();
const mongoose = require('mongoose');
const db = mongoose.connection;
let Scenario = require('../models/scenario.model');

// handles incoming HTTP GET requests on the /athlete/ url path
router.route('/').get((req, res) => {
  Scenario.find()
    .then(scenario => res.json(scenario))
    .catch(err => res.status(400).json('Error: ' + err));
});
// handles incoming HTTP POST requests on the /athlete/ath_create/
router.route('/scen_create').post((req, res) => {

  //gathering user input from athlete creation screen
  var SID = setID();
  var SName = req.body.title;
  var SReview = req.body.review;
  var SCreated = new Date();
  var LastEdited = new Date();
  var SCat = [
      req.body.injuryType, 
      req.body.injuryLocation
    ];
    // Object that will hold the HOPRS method details
  var SData = {
        //HOPRS: History details
        history: {
            hStory: req.body.hStory,
            hKeywords: [req.body.hKeyword1, req.body.hKeyword2],
            hReveal: [req.body.hReveal1, req.body.hReveal2],
            hAnswer: [req.body.hAnswer1, req.body.hReveal2]
        },

        //HOPRS: Observation Details
        observation: {
            oPoint: [
                {
                    oCoordX: req.body.oXCoord1,
                    oCoordY: req.body.oYCoord1,
                    oDescript: req.body.oDesc1,
                    oImage: req.body.oImg1
                },
                {
                    oCoordX: req.body.oXCoord2,
                    oCoordY: req.body.oYCoord2,
                    oDescript: req.body.oDesc2,
                    oImage: req.body.oImg2
                }
            ],

            oAnswers: [
                req.body.oAnswer1,
                req.body.oAnswer2
            ]
        },

        //HOPRS: Palpation Details
        palpation: {
            pPoint: [
                {
                    pCoordX: req.body.pXCoord1,
                    pCoordY: req.body.pYCoord1,
                    pMaxPain: req.body.mPain1,
                    pDescript: req.body.pDesc1
                },
                {
                    pCoordX: req.body.pXCoord2,
                    pCoordY: req.body.pYCoord2,
                    pMaxPain: req.body.mPain2,
                    pDescript: req.body.pDesc2
                }
            ],

            pAnswers: [
                req.body.pAnswer1,
                req.body.pAnswer2
            ]
        },

        //HOPRS: Range Of Motion (TODO)
        RoM: {

        },

        //HOPRS: Special Tests Details (TODO)
        specTest: {
            specTestAnswers: [

            ]
        },

        //HOPRS: Treatment Details (TODO)
        treatment: {

        }




  }

  const newScenario = new Scenario({
      
        SID,
        SName,
        SReview,
        SCreated,
        LastEdited,
        SCat,
        SData
  });

  console.log(newScenario);
  
  newScenario.save()
    .then(() => res.json('scenario added!'))
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
    const collection = db.collection("scenario");

    try{

        ID = 40000000 +  collection.countDocuments();

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