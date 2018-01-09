(function() {
    function uiModal() {
      var $ctrl = this;
      $ctrl.items = rooms;
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ["Room", uiModal]);
})();
