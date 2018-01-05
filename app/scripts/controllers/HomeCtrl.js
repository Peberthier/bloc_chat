(function() {
    function HomeCtrl() {
      this.rooms = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
