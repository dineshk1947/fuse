
(function ()
{
    'use strict';

    angular
        .module('app.reuse')
        .controller('ReuseController', ReuseController);

    /** @ngInject */
    function ReuseController($scope) {
      $scope.items = [1,2,3,4,5];
      $scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
       /*radio buttons*/
        $scope.radioData = [
            {label: "1", value: 1},
            {label: "2", value: 2},
            {label: "3", value: "3", isDisabled: true},
            {label: "4", value: "4"}
        ];


        $scope.submit = function () {
            alert("submit");
        };

        $scope.addItem = function () {
            var r = Math.ceil(Math.random() * 1000);
            $scope.radioData.push({label: r, value: r});
        };

        $scope.removeItem = function () {
            $scope.radioData.pop();
        };

        /*buttons*/

        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;

        $scope.googleUrl = 'http://google.com';

        /*input boxes*/
        $scope.showHints = true;
        $scope.user = {
            name: "",
            email: "",
            social: "123456789",
            phone: "N/A"
        };

    }

})();














