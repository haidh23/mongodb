const express = require('express');
const app = express();
const port = 8080;
const xehoiModel = require('./xehoiModel');

const { default: mongoose } = require('mongoose');

const uri = 'mongodb+srv://haidhph28703:hai252003@database.qlt54bl.mongodb.net/cp17310';


app.get('/', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));
   let xemays = await xehoiModel.find();
   console.log(xemays);
   res.send(xemays);
});
app.get('/add_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));


   await xehoiModel.insertMany([{
      Ten: "vision",
      Nam: 2000,
      GiaBan: 19999090
   }]);


   let xemays = await xehoiModel.find();
   res.send(xemays);



});
app.get('/delete_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));

   var query = { Ten: "svision UpDate3000" };
   await xehoiModel.deleteOne(query);
   let xemays = await xehoiModel.find();
   res.send(xemays);



});
app.get('/update_xe', async (req, res) => {
   await mongoose.connect(uri).then(console.log("Ok men"));


   var oldValue = { Ten: "vision" };
   var newValue = { Ten: "svision UpDate3000", Nam: 21010, GiaBan: 99000000 };
   await xehoiModel.updateOne(oldValue, newValue);
   let xemays = await xehoiModel.find();
   res.send(xemays);



});
app.listen(port, () => {
   console.log('listening on port ${port}');
});