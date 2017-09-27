var express = require('express');
var router = express.Router();
const db = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('index',{title:'adasd'})
});
router.get('/userlist',function(req,res,next){
  db.Article.find(null,function(err,doc){
    if(err){
      console.log(err)
    }else{
      res.send(JSON.stringify(doc))
      //res.render('index', { title: 'Hello world' });
    }
  })
    
})

module.exports = router;
