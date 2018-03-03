(function() {
  function setUserModalCtrl($uibModalInstance) {
    this.userName = '';

    this.setUsername = function() {
      $uibModalInstance.close(this.userName);
      // sconsole.log('this.userName',this.userName);
    };
  }

  angular
  .module('blocChat')
  .controller('setUserModalCtrl',['$uibModalInstance', setUserModalCtrl])
})();
