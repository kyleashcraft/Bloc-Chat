(function{
  function HomeCtrl(Room) {
    this.rooms = Room.rooms;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', [HomeCtrl]);

})();
