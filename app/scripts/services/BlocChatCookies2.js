(function() {
  function BlocChatCookies($cookies, $uibModal) {
    // use this for clearing cookie during test only: remove for production
    $cookies.put('blocChatCurrentUser','');
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log('currentUser', currentUser);

    var openModal = function() {
      var modalInstance = $uibModal.open({
        animation : 'true',
        templateUrl : '/templates/setUserModal.html',
        controller : 'setUserModalCtrl',
        controllerAs : 'setUserModal',
        keyboard: false,
        backdrop: 'static',
      });
      modalInstance.result.then(function (userName){
        currentUser = userName;
        if (!currentUser || currentUser === '') {
          
        };

        $cookies.put('blocChatCurrentUser',currentUser);
        console.log('blocChatCurrentUser', $cookies.get('blocChatCurrentUser'));
      });
    };

    var checkUserName = function(currentUser) {
      if (!currentUser || currentUser === '') {
        return ('false');
      }
    }

    if (checkUserName(currentUser)=='false') {
        openModal();
    };


  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
