(function() {
  function BlocChatCookies(blocChatCurrentUser, $cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/newusers.html',
        controller: 'UserCtrl',
        controllerAs: '$user',
              });
           }
         }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
