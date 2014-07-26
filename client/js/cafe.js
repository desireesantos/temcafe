angular.module('cafe', [])

.factory('socket', function ($rootScope, $interval) {

  var socket = io.connect();
    function on (event) {
      socket.on(event, function (data) {
        $rootScope.$apply(function () {
          $rootScope.coffeeLevel = data;
        });
      });
    };
  return {on : on}
})

.run(function ($rootScope, socket) {
  socket.on('start_msg', function (level) {
    $rootScope.coffeeLevel = level;
  });
});
