const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', ejs);

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true,
   useUnifiedTopology: true});

const articleSchema = mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    .post((req, res) => {
      var title = req.body.title;
      var content = req.body.content;

      console.log(title + "    " + content);
      const newArticle = new Article({
        title: title,
        content : content
      });
      newArticle.save((err) => {
        if(!err)
        {
          res.send(200);
        }
        else{
          res.send(err);
        }
      });
    })

    .delete((req, res) => {
      Article.deleteMany((err) => {
        if(!err){
          res.send(200)
        }
        else{
          res.send(err);
        }
      })
    })

    .get((req, res) => {
      Article.find((err, results) => {
        if (err)
        {
          res.send(err);
        }
        else
        {
          res.send(results);
        }
      });
    });

app.listen(process.env.PORT || 3000, () => {
  console.log("The server started at the desired port");
});
