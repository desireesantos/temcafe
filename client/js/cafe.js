angular.module('cafe', [])

.factory('socket', function ($rootScope, $interval) {
  /*
  var socket = io.connect();

  function on (event, callback) { socket.on(event, function () {
    var args = arguments;
    $rootScope.$apply(function () {
      callback.apply(socket, args);
    });
  });}
  */
  
  // Fake implementation
  var cbs = [];
  function on (event, cb) { cbs.push(cb);}
  
  var level = 0;
  var filling = true;
  $interval(function () {
    var rand = Math.floor(Math.random() * 0.1) + 5;
    filling = (filling && level <= 100 && level >= 0)? true : (level <= 100 && level < 0);
    level += filling? rand : -rand;
    cbs.forEach(function (cb) { cb(level);});
  }, 1000);
  
  return { on: on };
})

.run(function ($rootScope, socket) {
  console.log("RUN");
  socket.on('coffee:level', function (level) {
    $rootScope.coffeeLevel = level;
  });
});
