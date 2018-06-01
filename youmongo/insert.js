var mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoucode';
const [ firstName, lastName ] = process.argv.slice(2, 4);
const doc = {
	firstName,
	lastName
}
mongo.connect(url, (err, db) => {
	if (err) throw err;
	var docs = db.collection('docs');
	docs.insert(doc, (err, data) => {
		if (err) throw err;
		console.log(JSON.stringify(doc));
		db.close()
	})
})
