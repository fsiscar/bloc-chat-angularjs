(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
      console.log("messages", messages);
      console.log('roomId',roomId);
      // Filter messages by roomId:
      //var ref = new Firebase("https://your.firebaseio.com/accounts");
      //ref.orderByChild('email').equalTo('test2@test.com').on('value', function(snapshot) {
      //console.log(snapshot.val());});
      var refRoomId = ref.orderByChild('roomId').equalTo(roomId);//.on('value', function(snapshot) {
        //console.log(snapshot.val());
      //});

      var messagesRoom = $firebaseArray(refRoomId);

      console.log("messagesRoom",messagesRoom);

      return messagesRoom;
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
