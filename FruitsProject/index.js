const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Please Check you data entry, No name specified"]
  },
  rating: {
    type: Number,
    min : 1,
    max : 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 4,
  review: "Pretty solid as a LOL"
});


// const watermelon = new Fruit({
//   name: "Watermelon",
//   rating: 9,
//   review: "Yumm, Yumm, tasty, tasty!!!"
// });
//
// watermelon.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});
const People = mongoose.model("People", peopleSchema);

// const people2 = new People({
//   name: "Madhulika Tiwari",
//   age: 44,
//   favouriteFruit: watermelon
// });

//people2.save();
const watermelon = Fruit.find({name: "Watermelon"});
watermelon.

// People.updateOne({_id: "60b79c83d5e9d117383f14eb"}, {favouriteFruit: watermelon}, (err) => {
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Done Succesfully!!!");
//   }
// })



// People.deleteMany({name: "Madhulika Tiwari"}, (err) => {
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("Succesful!!!");
//   }
// });
//
// Fruit.deleteMany({name: "Watermelon"}, (err) => {
//   if (err){
//     console.log(err);
//   }
//   else {
//     console.log("Succesful!!!");
//   }
// });





//fruit.save();

// Fruit.deleteOne({name: "Peaches"}, (err) => {
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Sucessfully Removed!");
//   }
// });





// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 5,
//   review: "Good, but not that good"
// });
//
// const apple = new Fruit({
//   name: "Apple",
//   score: 10,
//   review: "Good, Very Good"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 8,
//   review: "Excellent"
// });
//
// Fruit.find((err, fruits) => {
//   if(err)
//   {
//     console.log(err);
//   }
//   else {
//     mongoose.connection.close();
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   }
// });






// Fruit.insertMany([kiwi, apple, banana], (err) => {
//   if(err)
//   {
//     console.log("Error occured : " + err);
//   }
//   else {
//     console.log("Succesfully saved the DB.")
//   }
// });








// const peopleSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
// const People = mongoose.model("People", peopleSchema);
//
// const people1 = new People({
//   name: "Shubham Tiwari",
//   age: 20
// });
//
// people1.save();
