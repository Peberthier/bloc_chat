(function() {
    function ModalCtrl($uibModalInstance, Room) {
      var $ctrl = this;
      var newroom;

      $ctrl.ok = function(newroom) {
        $uibModalInstance.close();
        Room.add(newroom);
      };

      $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ["$uibModalInstance", "Room", ModalCtrl]);
})();
