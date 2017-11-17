(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.log = function(room) {
      console.log(room);
    }

    Room.add = function(newRoom) { //accepts room object
      rooms.$add(newRoom).then(function(ref){ //add newRoom
      }); //no failure message
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
