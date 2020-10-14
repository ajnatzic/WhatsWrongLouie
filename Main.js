/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/30/2020
 * 
 */



// Connection URI (Authenticate by connecting to admin db, then we can switch to whatever db we want)
const uri =
"mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/admin?retryWrites=true&w=majority";


/**
 * MongoDB integration using Mongoose.
 * 
 * Following guide: https://www.geeksforgeeks.org/signup-form-using-nodejs-and-mongodb/
 * to connect HTML front end with our MongoDB database. 
 */

 //Mongoose Initialization
var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect(uri, {useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.log.bind(console,  "Connection Error"));
db.once('open', function(callback){
  console.log("connection successful");
})

var Main =  express();
Main.use(express.static(__dirname));

Main.use(bodyParser.json());
Main.use(express.static('public'));
Main.use(bodyParser.urlencoded({
  extended: true
}));


/**
 * Function to push an athlete to the DB using Mongoose.
 * Collects data from the index.html athlete creation section and
 * uses those inputs to create an athlete object, then the object is pushed
 * to the user_test => athlete collection.
 * 
 */
Main.post('/ath_create', async function(req, res){

    //gathering user input from athlete creation screen
    var inID = await setID("athlete");
    var inName = req.body.name;
    var inGender = req.body.gender;
    var inRace = req.body.race;
    var inSkColor = req.body.skinColor;
    var inShColor = req.body.shirtColor;
    var inPantColor = req.body.pantColor;
    var inPriorInj = req.body.priorInjury;

    //Create "athlete" object using the input data
    var ath = {
      AID: inID,
      AthName: inName,
      Race: inRace,
      Gender: inGender,
      SkColor: inSkColor,
      TShColor: inShColor, 
      PantColor: inPantColor,
      PInjury: inPriorInj
      }

    //insert the athlete into the athlete collection.
    db.collection('athlete').insertOne(ath, function(err, collection){
      if(err) throw err;
      console.log("Athlete inserted successfully");
    });

      return res.redirect('index.html');

})

//DB Connection initialization
Main.get('/', function(req, res){
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  return res.redirect('index.html');
}).listen(5500);

console.log("Server listening at port 5500");


//TODO: Restructure to work with mongoose
function dbPull(cName){
  


    //list to collect contents
    var list = [];


    const collection = db.collection(cName);

    // pulling information from collection
    list = collection.find().toArray();

    console.log(list);


}

// TODO: Restructure to work with Mongoose
async function dbDeleteByID(cName, ID){
  try {

    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //var to switch to user_test db.
    const db = client.db(dbName);

    const collection = db.collection(cName);

    // Finding item with matching ID and deleting
    await collection.deleteOne(ID);

    
  } 
  catch (err){
    await client.close(); 
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}



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
 *  @param cName: string that symbolizes which collection the ID will be made for.
 *  @return integer of the newly created ID.
 * 
 */
async function setID(cName){

    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    //var to focus on the specific collection passed in
    const collection = db.collection(cName);

    try{
      // Compare input to collection names to determine which collection to count from.
      if (cName.localeCompare("SUser") == 0){

        // set the ID based on the number of objects in the collection.
        ID = 30000000 + await collection.countDocuments();
        
        //gather list of IDs from collection objects
        duplicates = await collection.find().project({SUID: 1} ).map(x => x.SUID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }

      }
      else if (cName.localeCompare("athlete") == 0){

        ID = 20000000 +  await collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = await collection.find().project({AID: 1} ).map(x => x.AID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
      }
      else if (cName.localeCompare("players") == 0){

        ID = 10000000 + await collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = await collection.find().project({PID: 1} ).map(x => x.PID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
      }
      else if (cName.localeCompare("scenario") == 0){

        ID = 40000000 + await collection.countDocuments();

        //gather list of IDs from collection objects
        duplicates = await collection.find().project({SID: 1} ).map(x => x.SID).toArray();

        for (var i = 0; i < duplicates.length; i++){

          if( ID == duplicates[i]){
            ID++;
          }
        }
      }
      else{
        console.log("Invalid input: cName should be a collection name from the user_test database!");
      }
  }
  catch{

  }
  finally{
    return ID;
  }
}

