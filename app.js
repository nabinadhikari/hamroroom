// DEPENDENCIES
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose");

// APP CONFIG
mongoose.connect("mongodb://localhost/rest_hamrorooms");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Mongoose model config
// var roomSchema = mongoose.Schema({
//     title: String,
//     image: String,
//     description: String,
//     location: {type: String, default: "Nabin Adhikari"},
//     created:{type: Date, default:Date.now},
//     modified:{type: Date, default:Date.now},
//     added_by: String
//   });
//   var Room = mongoose.model("Room", roomSchema);

// Routes
app.get("/", function(req, res){
    res.render("index");
})


// Start server
app.listen(3000, function(){
    console.log("Server Started...");
  });