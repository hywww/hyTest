// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var connectHeadler = function connected() {
//     console.log('链接成功');
//     eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection',connectHeadler);
// eventEmitter.on('data_received',function () {
//     console.log('数据接收成功');
// })

// eventEmitter.emit('connection');

// console.log('程序执行完毕');


var fs = require('fs');
// var data = '';

// var readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');

// readerStream.on('data',function(chunk){
// 	data += chunk;
// })

// readerStream.on('end',function(){
// 	console.log(data);
// })

// readerStream.on('error',function(err){
// 	console.log(err.stack);
// })

// console.log('程序执行完毕');


var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log('程序执行完毕');