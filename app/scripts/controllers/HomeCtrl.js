(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.openNewRoomModal = function() {
        // open the UI Bootstrap Modal
        $uibModal.open({
      templateUrl: '/templates/newroom.html',
      controller: 'ModalCtrl',
      controllerAs: '$ctrl',
        });
      };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
