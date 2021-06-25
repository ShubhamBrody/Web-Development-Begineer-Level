
//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.get('/styles.css', (req, res)=>{
  res.sendFile(__dirname+"/styles.css");
});

app.post("/", (req, res)=>{
  var n1 = Number(req.body.Number1);
  var n2 = Number(req.body.Number2);
  res.send("The Sum is : " + (n1+n2));
});

app.listen(3000, ()=>{
  console.log("Server started and running at port 3000.");
});
