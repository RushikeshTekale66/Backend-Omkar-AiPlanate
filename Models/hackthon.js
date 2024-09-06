const mongoose = require("mongoose");

const hackthonSchema = new mongoose.Schema({
    name:{
        type:String
    },
    startDate:{
        type:Date,
        default:Date.now()
    },
    end:{
        type:Date
    },
    description:{
        type:String,
    },
    level:{
        type:String
    }
})

const hackthonModel = mongoose.model("hackthon", hackthonSchema);

module.exports = hackthonModel;