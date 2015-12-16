angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

    $scope.quotes = dataService.getData();
    $scope.toggleAdd = false;
    $scope.toggleRemove = false;

    $scope.addQuote = function(){
        $scope.newQuote = dataService.addData($scope.newQuote);
        $scope.quotes = dataService.getData();
        $scope.toggleAdd = false;
    };

    $scope.removeData = function(quoteObj){
        dataService.removeData(quoteObj);
        if(!$scope.quotes[0]){
            $scope.toggleRemove = false;
        }
    };
});
