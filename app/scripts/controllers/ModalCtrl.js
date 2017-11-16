(function(){
  function ModalCtrl($uibModal){
    this.open = function() {

      console.log('opening pop up');

      $uibModal.open({
        templateUrl: '../../templates/modal.html',
        controller: function() {
          this.cancel = function() {
            console.log("cancel");
            //$uibModal.dismiss();
          }
        },
        controllerAs: 'ctrl'
      });
    }
  };
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();
