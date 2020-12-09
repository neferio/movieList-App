angular.module('app.services', [])
.factory('movieservice', function($http) {
    var result = {};
    function resultObj(movieList, numPages) {
        this.movieList = movieList;
        this.numPages = numPages;
     }
    result.getmovies = function(movie,val) {

        let key="http://www.omdbapi.com/?apikey=25a7c7c1&s="+movie+"&page="+val;
        return $http({
            method: 'GET', 
            url: key
        }).then((res)=>{
            console.log(res.data.totalResults)
            let x=res.data.Search;
            let result1=new Array;
            if(x==null){
                let finalResult=new resultObj("notFound",0)
                return finalResult;
            }
            else{
                x.forEach(ele => {
                    console.log(ele.Title)
                    result1.push(ele.Title)
                });

                let finalResult=new resultObj(result1,parseInt(res.data.totalResults/10))

                
                return finalResult;
            }
        })
    }
    //console.log(result.data)
    return result;
})