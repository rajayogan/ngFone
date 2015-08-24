/**
 * Created by yogan on 24-08-2015.
 */
angular.module('testapp', ['ngFone'])

.controller('appctrl', function($scope, fonename){
        $scope.mobilename = function(modelno) {
            var mname = fonename.getmobilename(modelno);
            alert(mname.marketname);
        }
    })