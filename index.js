const express = require("express");
require("./DB/connect");
const Hakcthon = require("./Models/hackthon");
const app = express();
app.use(express.json());

const port = 5000;

//Home page
app.get("/", (req, res) => {
    res.send("Home Page");
})

//set new hackthon
app.post("/set-hackthon", (req, res) => {
    const hackthon = new Hakcthon(req.body);
    hackthon.save();
    res.send("Inserted hackthon");
})

//search & filter hackthon
app.get("/search-hackthon/:key", async (req, res) => {
    let result = await Hakcthon.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { level: { $regex: req.params.key } }
        ]
    }).sort({ name: 1 });
    res.send(result);
})


//get all hackthon
app.get("/get-hackthon", async (req, res) => {
    let result = await Hakcthon.find().sort({ name: 1 });
    res.send(result);

})

//update hackthon
app.put("/update-hackthon/:id", async (req, res) => {
    let result = await Hakcthon.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send("Hackthon Updated");
})

//delete hackthon
app.delete("/delete-hackthon/:id", async (req, res) => {
    let result = await Hakcthon.deleteOne({ _id: req.params.id });
    res.send("Hackthon Deleted ");
})

app.listen(port, (() => console.log("Application is running on : ", port)
))