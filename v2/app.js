//============================================================
// DEPENDENCIES
//============================================================
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require("mongoose"),
    User            = require("./models/user"),
    Room            = require("./models/room"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    expressSession  = require("express-session");


//============================================================
// SEEDING INITIAL DATA
//============================================================
//require("./seeds")();

//============================================================
// APP CONFIG
//============================================================
mongoose.connect("mongodb://localhost/hamrorooms");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser({uploadDir: './public/images'}));
app.use(methodOverride("_method"));

//============================================================
// PASSPORT CONFIG
//============================================================
app.use(expressSession({
    secret: "My name is not Nabin Adhikari",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//============================================================
// Routes - Index
//============================================================
app.get("/", function(req, res){

    Room.find({}, function(err, rooms){
        if(err){
            console.log(err);
        } else{
            res.render("index", {rooms: rooms});
        }
    });

});


//============================================================
// ROUTES
//============================================================
app.get("/new", function(req, res){
    res.render("new");
})

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

//============================================================
// SIGN UP ROUTES
//============================================================
app.get("/signup", function(req,res){
    res.render("signup");
});

app.post("/signup", function(req, res){
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username
    });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect("/signup");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/dashboard");
        });
    });
});

//============================================================
// LOGIN ROUTE
//============================================================
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}),function(){
    // Login callback
});

//============================================================
// LOGOUT ROUTE
//============================================================
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

//============================================================
// DASHBOARD ROUTE
//============================================================
app.get("/dashboard", function(req, res){
    res.send("You are now logged in, THIS IS YOUR DASHBOARD");
});


//============================================================
// START SERVER
//============================================================
app.listen(3000, function(){
    console.log("Server Started...");
  });