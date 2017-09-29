var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    created:{type: Date, default:Date.now},
    modified:{type: Date, default:Date.now},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

