(function() {
  function HomeCtrl(Room, $uibModal) {
    var home = {};
    home.rooms = Room.all;

    home.openModal = function(){
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/newRoomModal.html',
        controller: 'UIBootstrapCtrl',
        controllerAs: 'UIBootstrap',
      });
    }


    return home;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
