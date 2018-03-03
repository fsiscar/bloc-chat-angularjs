(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
      // Filter messages by roomId:
      var refRoomId = ref.orderByChild('roomId').equalTo(roomId);
      var messagesRoom = $firebaseArray(refRoomId);

      return messagesRoom;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
