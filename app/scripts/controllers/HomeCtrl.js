(function() {
  function HomeCtrl(Room) {
    var home = {};
    home.rooms = Room.all;

    return home;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
