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


// Create a user
// User.create({
//     fname: "Nabin",
//     lname: "Adhikari",
//     email: "mr.nabinadhikari@gmail.com",
//     phone: "0424709692",
//     address: "63 munro St, coburg, vic 3058"
// }, function(err, createdUser){
//     console.log(createdUser);
// });
// Creat a room and add it to user

// Room.create({
//     title: "Room 2",
//     description: "Lorem ipsum is simply fantastci",
//     location: "55 Champ St, Coburg, Vic 3058",
//     bedroom: 4,
//     bathroom: 2,
//     garage: 1,
// }, function(err, savedRoom){
//     if(err){
//         console.log(err);
//     } else{
//         // find the user
//         // put the saved room to that user profile
//         User.findOne({fname: "Nabin"}, function(err, foundUser){
//             if(err){
//                 console.log(err);
//             } else{
//                 foundUser.rooms.push(savedRoom);
//                 foundUser.save(function(err, savedData){
//                     if(err){
//                         console.log(err);
//                     } else{
//                         console.log(savedData);
//                     }
//                 });
//             }
//         });
//     }
// });


// Find the user
// Find all the rooms


// Routes - Index
app.get("/", function(req, res){
    // Fetch all data
    // dispaly
    // User.findOne({fname:"Nabin"}).populate("rooms").exec(function(err, user){
    //     if(err){
    //         console.log(err);
    //     } else{
    //         res.send(user);
    //     }
    // });
    Room.find({}, function(err, rooms){
        if(err){
            console.log(err);
        } else{
            console.log(rooms);
            res.render("index", {rooms: rooms});
        }
    })

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