const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title:String,
  date:Date,
  content:String
})

mongoose.connect('localhost:27017/CMS2')
var db = mongoose.connection

db.on('error',function () {
  console.log('Database connection error');
})

db.once('open',function(){
  console.log('The database has connected');
})


const Models = {
  Article:mongoose.model('Article',articleSchema),
}

module.exports = Models