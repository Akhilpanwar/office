const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
app.use(cors());
const SomeModel = require("./models/user");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Auth:xq1F3dpCXbh74hUh@myuser.m1cf999.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await SomeModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
app.post("/api/login", async (req, res) => {
  const user = await SomeModel.findOne({
    email: req.body.email,
    password: req.body.password,
  //  firstName:req.body.name
  
  });
  // if (user) {
  //   const token =jwt.sign({
  // password:user.password,
  //  email:user.email


  
  //   },'secret123')
    return res.json({ status: "ok", user:  user});
  } else {
    return res.json({ status: " not ok", user: false });
  }
});

app.listen(1900, () => {
  console.log("server started");
});
