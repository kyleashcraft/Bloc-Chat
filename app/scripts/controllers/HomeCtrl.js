(function(){
  function HomeCtrl($uibModal, Room, Message, $cookies) {
    this.rooms = Room;

    this.Message = Message;

    this.roomMessages = null;

    this.roomId = null;

    this.currentUser = function() {
      var user =$cookies.get('blocChatCurrentUser');
      if (user) {
        return 'Welcome, ' + user;
      }
    }

    this.log = function(thing) {
      console.log(thing);
    }

    this.openPopUp = function() {
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: '$ctrl'
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

    this.openRoom = function (roomId) {
        this.roomMessages = Message.getByRoomId(roomId);
    }



  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();
