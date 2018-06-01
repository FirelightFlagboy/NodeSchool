var mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const size = process.argv[2];

mongo.connect(url, (err, db) => {
	if (err) throw err;
	var collection = db.collection('prices');
	collection.aggregate([
		{ $match: { size: size}},
		{ $group: {
			_id: 'average',
			average: {
				$avg: '$price'
			}
		}}
	])
	.toArray((err, data) => {
		if (err) throw err;
		console.log(Number(data[0].average).toFixed(2));
		db.close();
	})
})
