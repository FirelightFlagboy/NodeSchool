var fs = require('fs');
var path = require('path');

function readDirExt(dirPath, ext, callback)
{
	ext = '.' + ext;
	fs.readdir(dirPath, (err, files) => {
		if (err)
			return callback(err);
		list = [];
		for (let i = 0; i < files.length; i++){
			if (path.extname(files[i]) == ext)
				list.push(files[i]);
		}
		callback(null, list);
	});
}

module.exports = readDirExt;
