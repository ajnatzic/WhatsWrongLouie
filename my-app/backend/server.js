/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/30/2020
 * 
 */



// Connection URI (Authenticate by connecting to admin db, then we can switch to whatever db we want)
// const uri =
// "mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/user_test?retryWrites=true&w=majority";


/**
 * MongoDB integration using Mongoose.
 * 
 * Following guide: https://www.geeksforgeeks.org/signup-form-using-nodejs-and-mongodb/
 * to connect HTML front end with our MongoDB database. 
 */

 //Mongoose Initialization
// var express = require("express");
// var bodyParser = require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect(uri, {useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error', console.log.bind(console,  "Connection Error"));
// db.once('open', function(callback){
//   console.log("connection successful");
// })

// var Main =  express();
// Main.use(express.static(__dirname));

// Main.use(bodyParser.json());
// Main.use(express.static('public'));
// Main.use(bodyParser.urlencoded({
//   extended: true
// }));


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/user_test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Load routers from their respective files
const athleteRouter = require('./routes/athlete');
const playersRouter = require('./routes/players');
const scenarioRouter = require('./routes/scenario');
const SUserRouter = require('./routes/SUser');

// adding routers as middleware
app.use('/athlete', athleteRouter);
app.use('/players', playersRouter);
app.use('/scenario', scenarioRouter);
app.use('/SUser', SUserRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});







/**
 * Function to push an athlete to the DB using Mongoose.
 * Collects data from the index.html athlete creation section and
 * uses those inputs to create an athlete object, then the object is pushed
 * to the user_test => athlete collection.
 * 
 */
// Main.post('/ath_create', async function(req, res){

//     //gathering user input from athlete creation screen
//     var inID = await setID("athlete");
//     var inName = req.body.name;
//     var inGender = req.body.gender;
//     var inRace = req.body.race;
//     var inSkColor = req.body.skinColor;
//     var inShColor = req.body.shirtColor;
//     var inPantColor = req.body.pantColor;
//     var inPriorInj = req.body.priorInjury;

//     //Create "athlete" object using the input data
//     var ath = {
//       AID: inID,
//       AthName: inName,
//       Race: inRace,
//       Gender: inGender,
//       SkColor: inSkColor,
//       TShColor: inShColor, 
//       PantColor: inPantColor,
//       PInjury: inPriorInj
//       }

//     // await dbDeleteByID("athlete", 20000002);
//     // await dbPull("athlete");

//     //insert the athlete into the athlete collection.
//     db.collection('athlete').insertOne(ath, function(err, collection){
//       if(err) throw err;
//       console.log("Athlete inserted successfully");
//     });

//       return res.redirect('index.html');

// })

// /**
//  * Function to push an athlete to the DB using Mongoose.
//  * Collects data from the index.html athlete creation section and
//  * uses those inputs to create an athlete object, then the object is pushed
//  * to the user_test => athlete collection.
//  * 
//  */
// Main.post('/scen_create', async function(req, res){

//   //gathering user input from athlete creation screen
//   var inID = await setID("athlete");
//   var inName = req.body.name;
//   var inGender = req.body.gender;
//   var inRace = req.body.race;
//   var inSkColor = req.body.skinColor;
//   var inShColor = req.body.shirtColor;
//   var inPantColor = req.body.pantColor;
//   var inPriorInj = req.body.priorInjury;

//   //Create "athlete" object using the input data
//   var ath = {
//     AID: inID,
//     AthName: inName,
//     Race: inRace,
//     Gender: inGender,
//     SkColor: inSkColor,
//     TShColor: inShColor, 
//     PantColor: inPantColor,
//     PInjury: inPriorInj
//     }

//   // await dbDeleteByID("athlete", 20000002);
//   // await dbPull("athlete");

//   //insert the athlete into the athlete collection.
//   db.collection('athlete').insertOne(ath, function(err, collection){
//     if(err) throw err;
//     console.log("Athlete inserted successfully");
//   });

//     return res.redirect('index.html');

// })

// //DB Connection initialization
// Main.get('/', function(req, res){
//   res.set({
//     'Access-control-Allow-Origin': '*'
//   });
//   return res.redirect('./WhatsWrongLouie/my-app/src/main.jsx')
// }).listen(3000);

// console.log("Server listening at port 3000");


//TODO: Restructure to work with mongoose
async function dbPull(cName, ID){
  
  try{

    console.log("In dbPull");
    //list to collect contents
    var list = [];


    // pulling information from collection
    list = await db.collection(cName).find().toArray();

    console.log(list);
  }
  catch (err){
    console.log("Error in dbPull");
  }


}


async function dbDeleteByID(cName, ID){
  try {

    // Finding item with matching ID and deleting
    await db.collection(cName).deleteOne({"AID": ID});

    
  } 
  catch (err){
    console.log("Error in dbDeleteByID");
  }
  finally {
    console.log("Delete complete");
  }

}



// /**
//  *  Function used to create an object ID that matches the database parameters.
//  *  Based on the collection name being passed in, the function will search said
//  *  collection to get the total number of objects in the collection, which will
//  *  then be used to created the new object ID. 
//  * 
//  *  example: If athlete has 4 objects listed, then the new object inserted will
//  *  have the set ID: 20000005. No IDs will repeat in the list. 
//  *  
//  *  Players:    ID is an 8 digit int starting with 1. (1xxxxxxx)
//  *  Athletes: ID is an 8 digit int starting with 2. (2xxxxxxx)
//  *  Super Users: ID is an 8 digit int starting with 3. (3xxxxxxx)
//  *  Scenarios: ID is an 8 digit int starting with 4. (4xxxxxxx)
//  * 
//  *  @param cName: string that symbolizes which collection the ID will be made for.
//  *  @return integer of the newly created ID.
//  * 
//  */
// async function setID(cName){

//     // Int var that will be populated with the specific ID number for an object.
//     var ID = 0;

//     //Array that will be used to check for duplicate IDs.
//     var duplicates = []; 

//     //var to focus on the specific collection passed in
//     const collection = db.collection(cName);

//     try{
//       // Compare input to collection names to determine which collection to count from.
//       if (cName.localeCompare("SUser") == 0){

//         // set the ID based on the number of objects in the collection.
//         ID = 30000000 + await collection.countDocuments();
        
//         //gather list of IDs from collection objects
//         duplicates = await collection.find().project({SUID: 1} ).map(x => x.SUID).toArray();

//         for (var i = 0; i < duplicates.length; i++){

//           if( ID == duplicates[i]){
//             ID++;
//           }
//         }

//       }
//       else if (cName.localeCompare("athlete") == 0){

//         ID = 20000000 +  await collection.countDocuments();

//         //gather list of IDs from collection objects
//         duplicates = await collection.find().project({AID: 1} ).map(x => x.AID).toArray();

//         for (var i = 0; i < duplicates.length; i++){

//           if( ID == duplicates[i]){
//             ID++;
//           }
//         }
//       }
//       else if (cName.localeCompare("players") == 0){

//         ID = 10000000 + await collection.countDocuments();

//         //gather list of IDs from collection objects
//         duplicates = await collection.find().project({PID: 1} ).map(x => x.PID).toArray();

//         for (var i = 0; i < duplicates.length; i++){

//           if( ID == duplicates[i]){
//             ID++;
//           }
//         }
//       }
//       else if (cName.localeCompare("scenario") == 0){

//         ID = 40000000 + await collection.countDocuments();

//         //gather list of IDs from collection objects
//         duplicates = await collection.find().project({SID: 1} ).map(x => x.SID).toArray();

//         for (var i = 0; i < duplicates.length; i++){

//           if( ID == duplicates[i]){
//             ID++;
//           }
//         }
//       }
//       else{
//         console.log("Invalid input: cName should be a collection name from the user_test database!");
//       }
//   }
//   catch{

//   }
//   finally{
//     return ID;
//   }
// }


function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
  alert("Welcome, " + profile.getName() + "! Let's fix some athletes.");
}