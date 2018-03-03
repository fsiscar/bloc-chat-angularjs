(function() {
  function BlocChatCookies($cookies, $uibModal) {
    // use this for clearing cookie during test only: remove for production
    $cookies.put('blocChatCurrentUser','');

    var currentUser = $cookies.get('blocChatCurrentUser');
    //console.log('currentUser', currentUser);
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
