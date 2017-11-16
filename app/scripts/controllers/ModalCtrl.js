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
        $uibModalInstance.close(val);
      }
    };

    this.modalClose = $uibModalInstance.result.then(
      function(result){ //successful promise eval
        var newRoom = {
          $id: null,
          $priority: null,
          $value: result
      };
        Room.add(newRoom);
      }, function(result){ //failure promise eval
        return result;
      });

  };
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
