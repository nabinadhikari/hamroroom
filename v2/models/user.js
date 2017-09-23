var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String,
    address: String,
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room"
        }
    ],
    created:{type: Date, default:Date.now},
    modified:{type: Date, default:Date.now},
});
module.exports = mongoose.model("User", userSchema);

