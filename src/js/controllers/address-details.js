(function(){
    'use strict';

    function AddressDetailsCtrl($http, apiMethods, $stateParams) {
        var ctrl = this;
        ctrl.address = $stateParams.address;

        activate();

        function activate() {
            $http.get(apiMethods.transactions.forAddress(ctrl.address))
                .success(function(data) {
                    data[0].reverse();
                    ctrl.txs = data[0];

                });
            $http.get(apiMethods.address.balance(ctrl.address))
                .success(function(data){
                   ctrl.balance = data;
                });

        }

    }

    angular.module('web').controller('AddressDetailsCtrl', AddressDetailsCtrl);
})();
