(function() {
  function BlocChatCookies($cookies, $uibModal) {
    // use next line for clearing cookie during test only: remove for production
    // with it, user will be reset every time browser is reloaded
    // Cookie name is 'blocChatCurrentUser'
    //$cookies.put('blocChatCurrentUser','');

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
        animation : 'true',
        templateUrl : '/templates/setUserModal.html',
        controller : 'setUserModalCtrl',
        controllerAs : 'setUserModal'
      });
      modalInstance.result.then(function (userName){
        currentUser = userName;
        if (!currentUser || currentUser === '') {
          location.reload();
        };
        $cookies.put('blocChatCurrentUser',currentUser);
      });
    };
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
