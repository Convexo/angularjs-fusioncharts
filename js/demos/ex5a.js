(function () {
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when ('/demos/ex5a', {
            templateUrl: 'views/ex5a.html',
            controller: 'ex5aController'
        });
    }]);

    app.controller('ex5aController', function ($scope, $rootScope) {
        $rootScope.currentTitle = 'Fetch data from a XML URL';        

        $rootScope.demoId = 'ex5a';
    });
}());
    