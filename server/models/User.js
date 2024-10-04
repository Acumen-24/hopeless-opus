const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentStoryId: {
    type: String,
    default: "0001",
  },
  sessionId:{
    type:String,
    default:""  
  }
});

module.exports = mongoose.model("User", UserSchema);
