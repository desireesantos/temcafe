angular.module('cafe', [])

.factory('socket', function ($rootScope) {
  var socket = io.connect();
  function on (event, callback) { socket.on(event, function () {
    console.log(" ...");
    var args = arguments;
    $rootScope.$apply(function () {
      callback.apply(socket, args);
    });
  });} 
  return { on: on };
})

.run(function ($rootScope, socket) {
  console.log("running ...");
  socket.on('coffee:level', function (level) {
    $rootScope.coffeeLevel = level;
  });
});
