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



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:test@cluster0.ambmi.mongodb.net/user_test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


client.connect(err => {
  const collection = client.db("user_test").collection("athlete");
  // perform actions on the collection object

    try{
        collection.insertOne(obj);
    }
    finally{
        client.close();
    }

    
});



