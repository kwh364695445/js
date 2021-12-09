const fs = require('fs');
fs.mkdir('./node', err => {
	if(err) throw err;
	console.log(创建成功);
});