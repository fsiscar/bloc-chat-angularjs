(function() {
  function UIBootstrapCtrl(Room, $uibModalInstance) {
    //this.newRoomName = {name: 'cool name'};
    //console.log(this.newRoomName.name);

    //example:
    //this.ok = function() {
    //  this.room = {name: ''};
    //  console.log(this.name);
    //  $uibModalInstance.close(this.name);
    //};

    // Is Room needed in UIBootstrapCtrl? If not, remove all 4 instances.

    this.newRoomName = '';
    //this.newRoomDescrip = '';

    this.createRoom = function(Room) {
      console.log("newRoomName:",this.newRoomName);
      $uibModalInstance.close(this.newRoomName);
    };

    this.cancel = function(Room) {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('UIBootstrapCtrl',['Room', '$uibModalInstance', UIBootstrapCtrl]);
})();
