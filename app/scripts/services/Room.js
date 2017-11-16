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
      newRoom.$id = (rooms.length + 1).toString(); //gives newRoom.$id an index value (previously null)
      rooms.$add(newRoom).then(function(ref){ //add newRoom
        console.log("New object added successfully: " + ref); //success message
      }, function(ref){
        console.log("failed to add new value: " + ref); //failure message
      });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
