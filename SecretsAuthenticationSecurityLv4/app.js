const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser : true,
  useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
  email : String,
  password : String
});

const User = mongoose.model("User", userSchema);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/register', (req, res) => {

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    const newUser = new User({
      email: req.body.username,
      password: hash
    });
    console.log(newUser);
    newUser.save((err) => {
      if(err)
      {
        console.log(err);
      }
      else
      {
        res.render('secrets');
      }
    });
  });
});

app.post('/login', (req, res) => {
  User.findOne({email : req.body.username}, (err, result) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      if(!result)
      {
        res.render('register');
      }
      bcrypt.compare(req.body.password, result.password, (err, resCmp)=>{
        if(resCmp === true)
        {
          console.log(result);
          res.render('secrets');
        }
        else
        {
          res.redirect('/login');
        }
      });
      }
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("The server started at the desired port.");
});
