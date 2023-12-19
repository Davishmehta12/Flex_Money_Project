const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  name : String,
  age : String,
  batch : String
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;