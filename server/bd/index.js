config = require('config').db;
redis = require('redis').createClient(config.port, config.hostname, {no_ready_check: true});	
redis.set('status', 0);

exports.write = function(value){
	client.set('status', value);
}

exports.read = function(){
	client.get('status', redis.print);
	client.get('status', function (err, result) {
    	result.toString()
});
}