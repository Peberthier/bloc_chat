(function() {
    function UserCtrl($uibModalInstance, $cookies) {
      var $user = this;

      this.blocChatCurrentUser = null;

      $user.ok = function() {
        $uibModalInstance.close();
        $cookies.put('User', this.blocChatCurrentUser)
      };

    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ["$uibModalInstance", "$cookies", UserCtrl]);
})();
