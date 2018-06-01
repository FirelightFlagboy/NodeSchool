var mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const age = parseInt(process.argv[2]);

mongo.connect(url, (err, db) => {
	if (err) throw err;
	var collection = db.collection('parrots');
	collection.find({
		age: { $gt: +age }
	}, {
		name: 1,
		age: 1,
		_id: 0
	}).toArray((err, doc) => {
		if (err) throw err;
		console.log(doc);
		db.close();
	})
})
