angular.module('app',[
    'app.services',
    'app.directives',
    'ngRoute',
    'app.controllers'
]).
config(['$routeProvider','$locationProvider', ($routeProvider,$locationProvider) =>{
    $routeProvider.
    
        when("/movie/:name/page/:num", 
        {  
            templateUrl:"/partials/result.html", 
           controller: "mainctr",
            css: '../css/style.css'
            //template:''
        }).
    
        otherwise({redirectTo: '/'});
    
        $locationProvider.html5Mode(true)
        $locationProvider.hashPrefix('!')
        
      
}]);