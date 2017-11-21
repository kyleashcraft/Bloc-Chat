(function(){
  function BlocChatCookies($cookies, $uibModal){

    this.currentUsername = null;

    var currentUser = $cookies.get('blocChatCurrentUser');

    if (!currentUser || currentUser === '') {
      var modal = $uibModal.open({
        keyboard: false,
        templateUrl: '/templates/username.html',
        controller: 'ModalCtrl',
        controllerAs: '$ctrl'
      });
      modal.result.then(function(val){
        $cookies.put('blocChatCurrentUser', val);
        console.log("Welcome, " + val);
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
