(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var home = {};
    home.messages = [];
    home.rooms = Room.all;
    home.activeRoom = 'Click menu to select a room.';
    home.newMessage = '';

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

    var genTimeStamp = function() {
      var Time = new Date();
      var Hour = (Time.getHours()<10?'0':'') + Time.getHours();
      var Min = (Time.getMinutes()<10?'0':'') + Time.getMinutes();
      var sec = (Time.getSeconds()<10?'0':'') + Time.getSeconds();
      return (Hour + ':' + Min + ':' + sec);
    }

    home.sendMessage = function() {
      var currTime = genTimeStamp();
      Message.send(home.newMessage, home.activeRoomId, currTime);
    }

    return home;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
