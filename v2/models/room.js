var mongoose = require("mongoose");

var roomSchema = mongoose.Schema({
    title: String,
    image: [
      {
        type: String
      }
    ],
    description: String,
    location: String,
    bedroom: Number,
    bathroom: Number,
    garage: Number,
    created:{type: Date, default:Date.now},
    modified:{type: Date, default:Date.now}
  });
module.exports = mongoose.model("Room", roomSchema);