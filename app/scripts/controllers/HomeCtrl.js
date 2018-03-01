(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var home = {};
    home.messages = [];
    home.rooms = Room.all;
    home.activeRoom = 'Click menu to select a room.';

    // $ctrl.openComponentModal = function () {
    //     var modalInstance = $uibModal.open({
    //       animation: $ctrl.animationsEnabled,
    //       component: 'modalComponent',
    //       resolve: {
    //         items: function () {
    //           return $ctrl.items;
    //         }
    //       }
    //     });
    //
    //     modalInstance.result.then(function (selectedItem) {
    //       $ctrl.selected = selectedItem;
    //     }, function () {
    //       $log.info('modal-component dismissed at: ' + new Date());
    //     });
    home.selectRoom = function($value, $id) {
      //Sets activeRoom value and call function to filter messages for display
      home.activeRoom = $value;
      home.activeRoomId = $id;
      home.messages = Message.getByRoomId(home.activeRoomId);
      console.log('home.messages',home.messages);
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
