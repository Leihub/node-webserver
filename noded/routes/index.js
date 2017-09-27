var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world' });
});
router.get('/userlist',function(req,res,next){
  // var db = req.db
  // var collection = db.get('usercollection')
  // collection.find({},{},function(){
  //   res.render('userlist',{
  //     'userlist':docs
  //   })
  // })
    res.render('index', { title: 'Hello world' });
})

module.exports = router;
