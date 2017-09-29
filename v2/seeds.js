
var mongoose = require("mongoose");
var User = require("./models/user");
var Room = require("./models/room");


var data = [
    {
        title:"First Room",
        image:[
            "http://www.hiltonhawaiianvillage.com/assets/img/rooms-and-suites/suites-speciality/HHV_Rooms-and-Suites_Suites-Speciality-Rooms.jpg",
            "https://images.roomstogo.com/img/landingpages/bedrooms/07-17-17-queen.jpg"
        ],
        description: "Morbi iaculis leo in velit consequat, nec imperdiet diam feugiat. Aenean id lacus eu eros vulputate auctor. Suspendisse accumsan malesuada dui non maximus. Nam ut odio suscipit, euismod lectus eu, elementum nunc. In neque ex, porttitor a gravida quis, mattis ac odio. Sed semper, eros quis sollicitudin tincidunt, ante est maximus velit, ut efficitur est nibh sed metus. Nulla leo neque, commodo non metus a, cursus convallis tortor.",
        location:"63 Munro St",
        bedrrom:3,
        bathroom:1,
        garage:1
    },
    {
        title:"Second Room",
        image:[
            "https://images.roomstogo.com/img/landingpages/bedrooms/07-17-17-queen.jpg"
        ],
        description: "Morbi iaculis leo in velit consequat, nec imperdiet diam feugiat. Aenean id lacus eu eros vulputate auctor. Suspendisse accumsan malesuada dui non maximus. Nam ut odio suscipit, euismod lectus eu, elementum nunc. In neque ex, porttitor a gravida quis, mattis ac odio. Sed semper, eros quis sollicitudin tincidunt, ante est maximus velit, ut efficitur est nibh sed metus. Nulla leo neque, commodo non metus a, cursus convallis tortor.",
        location:"63 Munro St",
        bedrrom:3,
        bathroom:1,
        garage:1
     },
     {
        title:"Second Room",
        image:[
            "https://images.roomstogo.com/img/landingpages/bedrooms/07-17-17-queen.jpg"
        ],
        description: "Morbi iaculis leo in velit consequat, nec imperdiet diam feugiat. Aenean id lacus eu eros vulputate auctor. Suspendisse accumsan malesuada dui non maximus. Nam ut odio suscipit, euismod lectus eu, elementum nunc. In neque ex, porttitor a gravida quis, mattis ac odio. Sed semper, eros quis sollicitudin tincidunt, ante est maximus velit, ut efficitur est nibh sed metus. Nulla leo neque, commodo non metus a, cursus convallis tortor.",
        location:"63 Munro St",
        bedrrom:3,
        bathroom:1,
        garage:1
     }    
]

function seeds(){
    // First delete all rooms
    Room.remove({}, function(err){
        console.log("ROOM DELETED");
        // Delete user
        User.remove({}, function(err){
            console.log("USER DELETED");    
            // Add user now
            User.create({
                fname:"Nabin",
                lname:"Adhikari",
                email:"mr.nabinadhikari@gmail.com",
                phone:"0424709692",
                address:"63 Munro St, Coburg 3058"
            }, function(err, savedUser){
                if(err){
                    console.log(err);
                }
                console.log("USER CREATED");
                // Now create rooms
                data.forEach(function(room){
                    Room.create(room, function(err, createdRoom){
                        if(err){
                            console.log(err);
                        } else{
                            console.log("ROOM CREATED");
                        }
                    })
                })
            });
        })
    })
    
    
}



module.exports = seeds;