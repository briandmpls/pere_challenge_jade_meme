/**
 * Created by briandaves on 10/6/15.
 */
var app = angular.module('memeGenerator', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    $scope.placedMemes = [];

    $http({
        method: 'GET',
        url: '/getMemes'
    }).then(function (response){
        $scope.placedMemes = response.data;
        console.log($scope.placedMemes);
    });

}]);
