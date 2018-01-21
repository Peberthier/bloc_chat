(function() {
    function HomeCtrl(Room, $uibModal, Message) {
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

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
