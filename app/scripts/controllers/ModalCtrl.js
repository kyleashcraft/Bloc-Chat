(function(){
  function ModalCtrl($uibModalInstance, Room){

    this.cancel = function() {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
    };

    this.add = function() {
      var doc = angular.element(document.getElementById('textbox') );
      var val = doc.val();
      if (val) {
        console.log("add clicked successfuly, passed value: " + val);
        $uibModalInstance.close(val);
      }
    };

    this.modalClose = $uibModalInstance.result.then(
      function(result){ //successful promise eval
        console.log("Add room clicked, result: " + result);
        var newRoom = {
          $id: null,
          $priority: null,
          $value: result
      };
        console.log("Room object created, still no id: ");
        console.log(newRoom);
        Room.add(newRoom);
      }, function(result){ //failure promise eval
        console.log("Cancel clicked, result: " + result);
        return result;
      });

  };
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
