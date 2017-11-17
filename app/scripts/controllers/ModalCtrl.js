(function(){
  function ModalCtrl($uibModalInstance){

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.add = function() {
      var doc = angular.element(document.getElementById('textbox') );
      var val = doc.val();
      if (val) {
        $uibModalInstance.close(val);
      }
    };

  };
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
})();
