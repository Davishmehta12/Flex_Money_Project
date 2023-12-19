const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");
require("dotenv").config();
const cors = require('cors');
// const URI = process.env.URI;
const URI = "mongodb+srv://20bcs052:5Nilq9GdSOYJjSTo@cluster0.yzhbk0t.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URI);
app.use(cors());
app.use(express.json());

app.post("/addUser", async function (req, res) {
  try {
    const { name, age, batch } = req.body;
    const isPaymentSuccessful = await makePayment(age);
    if(!isPaymentSuccessful){
      return res.json({ success: true, paymentStatus: isPaymentSuccessful });
    }
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ success: false, error: "User already exists" });
    }
    const newUser = new User({
      name,
      age,
      batch,
    });
    await newUser.save();
    res.json({ success: true, paymentStatus: isPaymentSuccessful });
  }catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

async function makePayment(age) {
  return age >= 18 && age <= 65;
}

app.listen(4000, function () {
  console.log("server is ready");
});