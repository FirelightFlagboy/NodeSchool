if (process.argv[2])
{
	require('fs').readFile(process.argv[2], (err, data) => {
		let tab = data.toString().split('\n');
		console.log(tab.length - 1);
	});
}
