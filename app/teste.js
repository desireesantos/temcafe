var fortune = require('../node_modules/fortune')
  , express = fortune.express;

var container = express()
  , port = process.argv[2] || 1337;

var    = fortune({
  db: 'people'
})
.resource('person', {
  name: String,
  age: Number
});

var animalsAPI = fortune({
  db: 'animals'
})
.resource('animal', {
  name: String,
  type: String,
  age: Number
});

container
  .use(peopleAPI.router)
  .use(animalsAPI.router)
  .get('/', function(req, res) {
    res.send('Hello, you have reached the zoo API.');
  })
  .get('/:id', function(req, res) {
    res.send('Hello, you have reached the zoo'+ req.params.id);
  })
  .listen(port);

console.log('Listening on port ' + port + '...');
