(function(){
  function HomeCtrl($uibModal, Room) {

    this.rooms = Room;

    this.openPopUp = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'ctrl'
      });
    }


  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
