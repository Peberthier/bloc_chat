(function() {
  function Message($firebaseArray) {
    var Message = {}
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    };

    Message.all = messages;

    Message.add = function (messageContent, activeRoom, user, now) {
      messages.$add({
        content: messageContent,
        roomId: activeRoom,
        userName: user,
        sentAt: now
    });
  }

    return Message;
  }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
