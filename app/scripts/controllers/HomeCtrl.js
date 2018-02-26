(function() {
  function HomeCtrl(Room, $uibModal) {
    var home = {};
    home.rooms = Room.all;

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
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
