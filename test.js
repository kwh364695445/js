const http = require('http');
const qs = require('querystring');
const server = http.createServer();
server.on('request',(request, response) => {
	console.log('method:', request.method);
	console.log('url:', request.url);
	let body = '';
	request.on('data', chuck => {body += chuck;});
	request.on('end', () => {
		console.log('body:', body.toString());
		console.log('bodyObj:', qs.parse(body.toString()));
		response.end('how are you',  () => {
			console.log('发送完成');
		});
	});
});
server.listen(8080, () => {
	console.log('开始监听...');
});