(function() {
  function Message($cookies, $firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var currentUser = $cookies.get('blocChatCurrentUser');

    Message.getByRoomId = function(roomId) {
      // Filter messages by roomId:
      var refRoomId = ref.orderByChild('roomId').equalTo(roomId);
      var messagesRoom = $firebaseArray(refRoomId);

      return messagesRoom;
    };

    Message.send = function(newMessage, activeRoomId, currTime) {
      messages.$add({
        content: newMessage,
        roomId: activeRoomId,
        username: currentUser,
        sentAt: currTime
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$cookies', '$firebaseArray', Message]);
})();
