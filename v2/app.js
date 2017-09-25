// DEPENDENCIES
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    User = require("./models/user"),
    Room = require("./models/room");

// APP CONFIG
mongoose.connect("mongodb://localhost/rest_hamrorooms");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// Routes - Index
app.get("/", function(req, res){

    Room.find({}, function(err, rooms){
        if(err){
            console.log(err);
        } else{
            console.log(rooms);
            res.render("index", {rooms: rooms});
        }
    });

});

// Routes - New
app.get("/new", function(req, res){
    res.render("new");
})

// Routes - Create
app.post("/rooms", function(req, res){
    // Now save room to database under current user
    // For now we save it to one fixed user ME
    // Save the data
    console.log(req.body.room);
    Room.create(req.body.room, function(err, savedRoom){
    if(err){
        console.log(err);
    } else{

        // find the user
        // put the saved room to that user profile
        User.findOne({fname: "Nabin"}, function(err, foundUser){
            if(err){
                console.log(err);
            } else{
                foundUser.rooms.push(savedRoom);
                foundUser.save(function(err, savedData){
                    if(err){
                        console.log(err);
                    } else{
                        res.send(savedData);
                    }
                });
            }
        });
    }
});
  
});


// Start server
app.listen(3000, function(){
    console.log("Server Started...");
  });