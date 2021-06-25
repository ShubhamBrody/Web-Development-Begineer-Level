//jshint esversion : 6
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

var city = "lucknow";
const apikey = "7f3b24b01d08c22b29fb3b717786c9f1";
var units = "metric";

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
  city = req.body.cityquery;
  units = req.body.units;
  const url = "https://api.openweathermap.org/data/2.5/weather?appid="+ apikey +
  "&q=" + city + "&units=" + units;
  https.get(url,
   (response)=>{
    response.on("data", (data)=>{
      //turns String to JS object its posite is Stringify
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<body style='background-color: #555555'>");
      res.write("<p style='color: #DDDDDD'>The Weather is currently " + weatherDesc + "</p>");
      res.write("<h1 style='color:#EEEEEE'>The temperature in " + req.body.cityquery.toLowerCase() +" is : " + temp + "°C </h1>");
      res.write("<img src=" + imageURL + ">");
      res.write("</body>");
      res.send();
    });
  });
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});
