var mongo = require('mongodb').MongoClient;

const dbname = process.argv[2];
const url = 'mongodb://localhost:27017/' + dbname;

mongo.connect(url, (err, db) => {
	if (err) throw err;

	var users = db.collection('users');
	users.update({
		username: 'tinatime',
	}, {
		$set: {
			age: 40
		}
	})
	db.close();
})
