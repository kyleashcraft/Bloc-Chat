(function(){
  function ModalCtrl($uibModalInstance){

    this.cancel = function() {
      console.log("cancel");
      $uibModalInstance.dismiss('cancel');
    };

    this.add = function() {
      console.log("add clicked");
      var doc = angular.element(document.getElementById('textbox') );
      var val = doc.val();
      if (val) {
        $uibModalInstance.close(val);
      }
    };

    $uibModalInstance.result.then(function(result){
      console.log("Add room clicked, result: " + result);
      return result;
    }, function(result){
      console.log("Cancel clicked, result: " + result);
      return result;
    });

  };
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
