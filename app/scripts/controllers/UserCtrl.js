(function() {
    function UserCtrl($uibModalInstance, $cookies) {
      var $user = this;

      this.blocChatCurrentUser = '';

      $user.ok = function() {
        $uibModalInstance.close();
        $cookies.put('user', this.blocChatCurrentUser)
      };

    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ["$uibModalInstance", "$cookies", UserCtrl]);
})();
