if (process.argv[2] && process.argv[3])
{
	var path = require('path');
	var ext = '.' + process.argv[3];

	require('fs').readdir(process.argv[2], (err, list) => {
		if (err)
			return console.error(err);
		for (let i = 0; i < list.length; i++)
		{
			if (path.extname(list[i]) === ext)
				console.log(list[i]);
		}
	});
}
