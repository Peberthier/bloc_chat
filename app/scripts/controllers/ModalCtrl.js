(function() {
    function ModalCtrl($uibModalInstance, Room) {
      var $ctrl = this;

      this.newroom = '';

      $ctrl.ok = function() {
        $uibModalInstance.close();
        Room.add(this.newroom);
      };

      $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ["$uibModalInstance", "Room", ModalCtrl]);
})();
