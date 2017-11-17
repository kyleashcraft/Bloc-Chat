(function(){
  function HomeCtrl($uibModal, Room) {
    this.rooms = Room;

    this.log = function(thing) {
      console.log(thing);
    }

    this.openPopUp = function() {
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'ctrl'
      });
      modal.result.then(function(val){
        var newRoom = {
          $id: null,
          $priority: null,
          $value: val
        };
        Room.add(newRoom);
      }, function(val){
        return val;
      });
    }



  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
