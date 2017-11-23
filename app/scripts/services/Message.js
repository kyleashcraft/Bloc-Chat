(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray( ref.orderByChild("roomId").equalTo(roomId) )
    };

    Message.send = function(roomId, currentUser) {
      currentUser = currentUser || $cookies.get('blocChatCurrentUser');
      var messageBox = angular.element( document.getElementById('message') );
      var message = messageBox.val();
      if(message) {
        var today = new Date();
        var sendTime = today.getHours() + ":" + today.getMinutes();
        var newMessage = {
          content: message,
          roomId: roomId,
          sentAt: sendTime,
          username: currentUser
        }
      messages.$add(newMessage);
      console.log(newMessage);
      messageBox.val('');
      }
    }
    return Message;
    };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
