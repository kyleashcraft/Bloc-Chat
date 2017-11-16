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
      newRoom.$id = rooms.length; //gives newRoom.$id an index value (previously null)
      console.log('Room.js - new room object value: ') //log for clarity
      console.log(newRoom); //print final newRoom variable to be added
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
