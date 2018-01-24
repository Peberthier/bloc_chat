(function() {
    function UserCtrl($uibModalInstance, $cookies) {
      var $user = this;

      this.blocChatCurrentUser = '';

      $user.ok = function() {
        if (this.blocChatCurrentUser) {
          $uibModalInstance.close();
          $cookies.put('User', this.blocChatCurrentUser);
        }
      };

    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ["$uibModalInstance", "$cookies", UserCtrl]);
})();
