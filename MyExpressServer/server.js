//jshint esversion:6

const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send("<h1> HELLO </h1>");
});

app.get('/contact', (req, res)=>{
  res.send("Contact me at st8896464352@gmail.com");
});

app.get('/about', (req,res) => {
  res.send("My name is Shubham Tiwari and I am a game Developer and a wbe developer");
});

app.listen(3000,
  () =>
  {console.log("Server started at port 3000.");});
