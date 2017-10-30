var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'shangpin'
});

/* GET home page. */
router.get('/list', function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT id,new,time FROM ruisen',
	  function(err, rows, fields) {
	  	res.send(rows)
	  });
});

router.post('/detail', function(req, res, next) {
	var id=req.body.id;
  res.header("Access-Control-Allow-Origin","*")
  connection.query('SELECT * FROM detail WHERE id='+id,function(err, rows, fields){
  	res.send(rows)
  })
});


module.exports = router;
