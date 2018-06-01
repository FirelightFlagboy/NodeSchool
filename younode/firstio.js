var fs = require('fs');

if (process.argv[2])
{
	let content = fs.readFileSync(process.argv[2]);
	let tab = content.toString().split('\n');
	console.log(tab.length - 1);
}
