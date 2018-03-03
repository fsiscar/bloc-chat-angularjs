(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var home = {};
    home.messages = [];
    home.rooms = Room.all;
    home.activeRoom = 'Click menu to select a room.';

    home.selectRoom = function($value, $id) {
      //Sets activeRoom value and call function to filter messages for display
      home.activeRoom = $value;
      home.activeRoomId = $id;
      home.messages = Message.getByRoomId(home.activeRoomId);
    }

    home.openModal = function(){
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/newRoomModal.html',
        controller: 'UIBootstrapCtrl',
        controllerAs: 'UIBootstrap',
      });

      modalInstance.result.then(function (newRoomName){
        Room.add(newRoomName);
      });
    }

    return home;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
