(function(angular){
	'use strict';
	
	angular
	  .module('app',[])
	  .controller('empresaController',empresaController);

	empresaController.inject = [];  
	function empresaController () {
		var vm = this;

		vm.tab = 1 ;

		vm.setTab = function (newTab) {
			vm.tab = newTab;
		};

		vm.isSet = function (tabNum) {
			return vm.tab === tabNum;
		};
	}  

})(window.angular);