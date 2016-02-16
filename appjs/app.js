var myApp = angular.module('myApp',['ngRoute','ngSanitize','myAppControllers','myAppDirectives']);
myApp.config(['$routeProvider', function($routeProvider) {
                $routeProvider.when("/", {templateUrl: "partials/index.html"});
                $routeProvider.when("/events/:category", {templateUrl: "partials/events.html", controller: "eventsController"});
                $routeProvider.when("/wkshops/:category", {templateUrl: "partials/wkshops.html", controller: "wkshopsController"});
                $routeProvider.when("/karnival", {templateUrl: "partials/karnival.html", controller: "karnivalController"});
                $routeProvider.when("/contacts", {templateUrl: "partials/contacts.html", controller: "contactsController"});
                $routeProvider.when("/gl", {templateUrl: "partials/gl.html", controller:"glController"});
                $routeProvider.otherwise({redirectTo: '/'});
                }]);
