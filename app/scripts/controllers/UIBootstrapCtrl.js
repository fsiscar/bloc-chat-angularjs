(function() {
  function UIBootstrapCtrl() {
    console.log("test 1 ok");

    var test = function(){
      console.log("test 2 ok");
    }
  }

  angular
    .module('blocChat')
    .controller('UIBootstrapCtrl',[UIBootstrapCtrl]);
})();
