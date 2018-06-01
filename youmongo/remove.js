var mongo = require('mongodb').MongoClient;

const [ dbname, collectionName, _id ] = process.argv.slice(2, 5);
const url = 'mongodb://localhost:27017/' + dbname;

mongo.connect(url, (err, db) => {
	if (err) throw err;

	var collection = db.collection(collectionName);
	collection.remove({
		_id: _id
	}, (err, obj) => {
		if (err) throw err;
		console.log(obj.result.n);
		db.close();
	})
})
