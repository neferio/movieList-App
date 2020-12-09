angular.module('app.directives',[]).
directive('mySearchBox',()=>{
    return{
        restrict:'E',
        transclude: false,
        scope: {
            searchText: '=',
            result:'=',
            pages:'='
        },
        controller:function ($scope,$location){
            $scope.search=()=>{
                    $location.url(`/movie/${$scope.movieSearched}/page/1`)
            }
            
        },
        templateUrl:"../partials/bar.html"
    }

}).
directive('mySearchResults',()=>{
    return{
        restrict:'E',
        transclude: true,
        replace:true,
        scope: {
            
            pages:'=',
            searchText: '=',
            result:'='
          
        },
        controller:function($scope,movieservice,$routeParams,$route){
        
            $scope.searchText=$routeParams.name;
            $scope.page=parseInt($routeParams.num);
            console.log($routeParams.name)
               
            
            $scope.ex=new Array;
            movieservice.getmovies($scope.searchText,$scope.page).then((res)=>{
                    
                    
                    $scope.result=res.movieList;
                    console.log(res.numPages)
                    $scope.pages=res.numPages;

                   
            })




            $scope.change=(y)=>{
                    
                $route.updateParams({num:y});
            }
        },
        
        template:`<div class="resultBox">
        
        <!-- Search Results For {{searchText}}:</h4> -->
          <div class="flexBox">
            <div class="result">
              <div ng-repeat="x in result track by $index" class="movieResult">
                <h3>{{x}}</h3> 
              </div>
            </div>
          </div>
          
          <div class="flexBox2">
            <div class="buttons">
              <button ng-repeat="x in [].constructor(pages) track by $index" ng-click="change($index+1)">
                {{$index+1}}
              </button>
            </div>
        
        
          </div>`
    }
})
