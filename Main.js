/**
 *  Tyler Hay, Dillon Viilo, AJ Natzic
 *  GVSU Senior Project - Winter 2020
 *  9/30/2020
 * 
 */



//Creating "Athlete object" that will be inserted into user_test->athlete
var obj = {AthName: "Louie",
    Race: "White",
    Gender: "Male",
    SkColor: "#FFDBAC",
    TShColor: "#0000FF", 
    PantColor: "#FFFFFF",
    PInjury: 200001
 };


const { MongoClient } = require("mongodb");

// Connection URI (Authenticate by connecting to admin db, then we can switch to whatever db we want)
const uri =
"mongodb+srv://Test:Test@cluster0.ambmi.mongodb.net/admin?retryWrites=true&w=majority";

// Variable to hold database name to use
const dbName = "user_test";

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {

  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //var to switch to user_test db.
    const db = client.db(dbName);

    const collection = db.collection("athlete");

    // Inserting a single object (default athlete created above)
    const ath = await collection.insertOne(obj);

    // Finding the single object we just inserted to verify
    const myAth = await collection.findOne();

    //Print athlete to console
    console.log(myAth);


    
  } 
  catch (err){
    await client.close(); 
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



