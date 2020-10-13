/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/30/2020
 * 
 */


// TODO: Separate data gathering and data showing functions so that
//       code will run in the HTML page.

const { MongoClient } = require("mongodb");
const { exit } = require("process");


// Connection URI (Authenticate by connecting to admin db, then we can switch to whatever db we want)
const uri =
"mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/admin?retryWrites=true&w=majority";

// Variable to hold database name to use
const dbName = "user_test";

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

let athSubmitBtn = document.querySelector("#submitButton");

/**
 *  Function used to push an object into a collection within the database.
 * 
 *  @param obj: The object that's being inserted into the database collection
 *         cName: String that contains the collection name
 */
async function dbPush(obj, cName) {

  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //var to switch to user_test db.
    const db = client.db(dbName);

    const collection = db.collection(cName);

    // Inserting a single object
    await collection.insertOne(obj);
    console.log("Push complete");


    
  } 
  catch (err){
    await client.close(); 
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function dbPull(cName){
  
  try {

    //list to collect contents
    var list = [];
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //var to switch to user_test db.
    const db = client.db(dbName);

    const collection = db.collection(cName);

    // pulling information from collection
    list = await collection.find().toArray();

    console.log(list);

    
  } 
  catch (err){
    await client.close(); 
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return list
  }

}

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
 *  Function used for athlete object creation
 */
async function createAthlete(name, race, gender, skcolor, tshcolor, pantcolor, pinjury) {

    //Creating "Athlete object" that will be inserted into user_test->athlete
  var obj = {
  AID: await setID("athlete"),
  AthName: name,
  Race: race,
  Gender: gender,
  SkColor: skcolor,
  TShColor: tshcolor, 
  PantColor: pantcolor,
  PInjury: pinjury
  };

  return obj;
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

  try {

    // Int var that will be populated with the specific ID number for an object.
    var ID = 0;

    //Array that will be used to check for duplicate IDs.
    var duplicates = []; 

    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //var to switch to user_test db.
    const db = await client.db(dbName);

    //var to focus on the specific collection passed in
    const collection = await db.collection(cName);

    // Compare input to collection names to determine which collection to count from.
    if (cName.localeCompare("SUser") == 0){

      // set the ID based on the number of objects in the collection.
      ID = 30000000 + await collection.countDocuments();
      
      //gather list of IDs from collection objects
      duplicates = await collection.find().project({SUID: 1} ).map(x => x.SUID).toArray();

      console.log(duplicates);

      for (var i = 0; i < duplicates.length; i++){

        if( ID == duplicates[i]){
          ID++;
        }
      }

    }
    else if (cName.localeCompare("athlete") == 0){

      ID = 20000000 + await collection.countDocuments();

      //gather list of IDs from collection objects
      duplicates = await collection.find().project({AID: 1} ).map(x => x.AID).toArray();

      for (var i = 0; i < duplicates.length; i++){

        if( ID == duplicates[i]){
          ID++;
        }
      }
    }
    else if (cName.localeCompare("players") == 0){

      ID = 10000000 + collection.countDocuments();

      //gather list of IDs from collection objects
      duplicates = await collection.find().project({PID: 1} ).map(x => x.PID).toArray();

      for (var i = 0; i < duplicates.length; i++){

        if( ID == duplicates[i]){
          ID++;
        }
      }
    }
    else if (cName.localeCompare("scenario") == 0){

      ID = 40000000 + collection.countDocuments();

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
  catch (err){
    await client.close(); 
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return ID;
  }

}

/**
 *  Functions for linking HTML side
 */

/**
 * On click function for the submit button in the
 * Athlete creation menu. Function gathers all of the
 * user input options from the text/choice boxes and creates
 * a new athlete. 
 */
athSubmitBtn.onclick = function(){

  let inName = document.getElementById("name");
  let inGender = document.getElementById("gender");
  let inRace = document.getElementById("race");
  let inSkColor = document.getElementById("skinColor");
  let inShColor = document.getElementById("shirtColor");
  let inPantColor = document.getElementById("pantColor");
  let inPriorInj = document.getElementById("priorInjury");

  athlete = createAthlete(inName,
    inRace, inGender, inSkColor, inShColor, inPantColor,
    inPriorInj);

  console.log(athlete);
}

async function run(){

  var ID = await setID("athlete");
  console.log(ID);
}

run();