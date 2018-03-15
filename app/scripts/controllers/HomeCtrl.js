(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
      this.rooms = Room.all;

      this.activeRoom = null;
      this.messages = null;


      this.openNewRoomModal = function() {
        // open the UI Bootstrap Modal
        $uibModal.open({
      templateUrl: '/templates/newroom.html',
      controller: 'ModalCtrl',
      controllerAs: '$ctrl',
        });
      };

      this.setActiveRoom = function(room) {
        this.activeRoom = room;
        this.messages = Message.getByRoomId(room.$id);
      };

      this.ok = function() {
        Message.add(this.newmessage, this.activeRoom.$id, $cookies.get('User'), moment().calendar());
      }

      this.cancel = function() {
        console.log("home cancel works")
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
