var myApp = angular.module("myApp", ['ui.router','uiRouterStyles','angularCSS','ngMessages','ngResource']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var homePage = {
             name: 'homepage',
             url: '/home',
             templateUrl: "/assets/partials/home.html",
             controller: 'userController',
             controllerAs:"meep",
             data: {
                     css: '/style/css/main.css'
                    }
        };
        var sample_api = {
             name: 'sample_api',
             url: '/sample_api',
             templateUrl: "/assets/partials/login.html",
             controller: 'userController',
             controllerAs:"meep",
             data: {
                     css: '/style/css/main.css'
                    }
        };
        var sample_backend = {
             name: 'sample_backend',
             url: '/sampe_backend',
             templateUrl: "/assets/partials/message_board.html",
             controller: 'messageController',
             controllerAs:"meep",
             data: {
                     css: '/style/css/main.css'
                    }
        };
        $stateProvider.state(homePage);
        $stateProvider.state(sample_backend);
        $stateProvider.state(sample_api);
        $urlRouterProvider.otherwise('/home');
}]);