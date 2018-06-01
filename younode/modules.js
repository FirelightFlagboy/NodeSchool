var myReadDir = require('./readdir.js');

	myReadDir(process.argv[2], process.argv[3], (err, list) => {
		if (err)
			return console.log(err);
		for (let i = 0; i < list.length; i++)
		{
			console.log(list[i]);
		}
	});
