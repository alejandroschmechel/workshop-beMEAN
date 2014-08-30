'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('XXXController', ['$scope', '$http', function($scope, $http){

    $scope.mostraListagem = false;
    $scope.search = 'Stoya';

    $scope.rodar = function(){
      $scope.mostraListagem = !$scope.mostraListagem;
    }

    $scope.$watch('search', function(data) {
      searchVideo(data);
    });

    // var url = 'http://cep.correiocontrol.com.br/02011200.json';
    var searchVideo = function(query){
      var url = 'http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Videos.searchVideos&search='+query;
      delete $http.defaults.headers.common['X-Requested-With'];
      $http.get(url)
      .success(function(data) { //função executada após o sucesso da requisição
        console.log(data);
        $scope.videos = data.videos;
      })
      .error(function(err){ //função executada após o erro da requisição
        console.log('Error: ', err)
      });
    }
  }]).
  controller('BeerListController', ['$scope', '$http', function($scope, $http){

    $scope.ordenar = function(predicate){
      $scope.reverse = true;
      $scope.predicate = predicate;
    }

    $scope.remove = function(beer){
      if(confirm("Do you really want to remove the beer "+beer.name+" ?")){
        $http({
          method: "DELETE",
          url: 'http://localhost:3000/api/beers/'+beer._id
        })
        .success(function(data){
          $scope.msg = "Cerveja deletada com sucesso"
          console.log(data);

          var index = $scope.beers.indexOf(beer);
          $scope.beers.splice(index, 1);
        })
        .error(function(data){
          console.log(err);
        });
      }
    }

    var method = "GET",
      url = 'http://localhost:3000/api/beers';

    $scope.reverse = true;
    $scope.predicate = 'name';

    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.beers = data;
      $scope.msg = "Cervejas listadas com sucesso"
      console.log(data);
    })
    .error(function(data){
      console.log(err);
    });
  }]).
  controller('BeerCreateController', ['$scope', '$http', function($scope, $http){
    $scope.create = function(beer){
      var method = "POST",
      url = 'http://localhost:3000/api/beers';

      $http({
        method: method,
        url: url,
        data: beer
      })
      .success(function(data){
        $scope.beers = data;
        $scope.msg = "Cerveja "+beer.name+" cadastrada com sucesso";
      })
      .error(function(data){
        console.log(err);
      });
    }

  }]).
  controller('BeerShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    var method = "GET",
      id = $routeParams.id,
      url = 'http://localhost:3000/api/beers/'+id;

    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.beer = data;
      $scope.msg = "Cerveja "+data.name+" listada com sucesso";
    })
    .error(function(data){
      console.log(err);
    });

  }]).
  controller('BeerEditController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    var method = "GET",
      id = $routeParams.id,
      url = 'http://localhost:3000/api/beers/'+id;

    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.beer = data;
      $scope.msg = "Cerveja "+data.name+" listada com sucesso";
    })
    .error(function(data){
      console.log(err);
    });

    $scope.save = function(beer){
      var method = "PUT",
        id = $routeParams.id,
        url = 'http://localhost:3000/api/beers/'+id;

      $http({
        method: method,
        url: url,
        data: beer
      })
      .success(function(data){
        $scope.msg = "Cerveja editada com sucesso";
      })
      .error(function(data){
        console.log(err);
      });
    }

  }]).
  controller('BeerTotalController', ['$scope', '$http', function($scope, $http){
    var method = "GET",
      url = 'http://localhost:3000/api/beers/total';

    $http({
      method: method,
      url: url
    })
    .success(function(data){
      $scope.msg = data;
    })
    .error(function(data){
      console.log(err);
    });

  }]);
