const monk = require('monk');

const db = monk('localhost/meower');
const mews = db.get('mews');

mews.insert({'mew': "Miau",
			'costm': 'else'}).then(created => console.log(created));
			