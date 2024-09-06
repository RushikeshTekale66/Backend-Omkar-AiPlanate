const mongoose = require("mongoose");

const database = "mongodb://127.0.0.1:27017/AiPlanate"

try{
    mongoose.connect(database);
    console.log("Connected to database");
    
}
catch(error){
    console.log("Got Error");
    
}