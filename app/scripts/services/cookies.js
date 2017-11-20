(function(){
  function BlocChatCookies($cookies, $uibModal, $rootScope){

    var BlocChatCookies = {};

    this.currentUsername = null;

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      var modal = $uibModal.open({
        keyboard: false,
        backdropClass: 'newUser',
        templateUrl: '/templates/username.html',
        controller: 'ModalCtrl',
        controllerAs: 'ctrl'
      });
      modal.result.then(function(val){
        $cookies.put('blocChatCurrentUser', val);
        console.log("Welcome, " + val);
      });
    } else {
      console.log("Welcome back, " + currentUser);
    }
    return BlocChatCookies;
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', BlocChatCookies]);

})();
