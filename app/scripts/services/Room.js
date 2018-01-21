(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    Room.all = rooms;

    Room.add = function(roomName) {
      //var roomName = document.getElementById('roomName').value;
      rooms.$add(roomName);
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
