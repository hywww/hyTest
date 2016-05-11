var express = require('express');

var app = express();

app.get('/',function  (req,res) {
	res.send('hello');
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('test 访问地址为 http://',host,port)
})