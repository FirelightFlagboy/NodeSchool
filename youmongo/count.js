var mongo = require('mongodb').MongoClient;

const age = parseInt(process.argv[2]);
const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
	if (err) return err;

	var parrots = db.collection('parrots');
	parrots.count({
		age: {
			$gt: +age
		}
	}, (err, count) => {
		if (err) return err;
		console.log(count);
		db.close();
	})
})
