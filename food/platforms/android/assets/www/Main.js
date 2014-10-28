var mainApp = angular.module('Main', ["ui.router", "lbExternalSql", "newDishControllers", "loginServices", "dataServices"]);

mainApp.controller('mainCtrl', function ($scope, $state) {

});
//mainApp.run(function ($state, $rootScope)
//{ $rootScope.$state = $state; });
mainApp.controller('mainTemplateCtrl', function ($scope,$state) {
    $scope.tabs = [
            { link: 'Main.LB', label: 'Lunch Box' },
            { link: 'Main.Search', label: 'Search' },
                 { link: 'Main.new.location', label: 'Add to LB' },
    ];

    $scope.selectedTab = $scope.tabs[0];
  

    $scope.tabClass = function (tab) {    
        if ( $state.includes(tab.link)){
            return "active";
        } else {
            return "";
        }
    }

    $scope.props = {};
    $scope.props.Title = "";
    //$scope.newPlate = function () {
    //    window.open("Index.html", "_self");
    //}
    //$scope.$on('selectTabChanged', function (e, tab)
    //{ $scope.setSelectedTab(tab); });

});
mainApp.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider.
         state('Main', {
             url: '/Main',
             templateUrl: 'MainParent.html',
             controller: 'mainTemplateCtrl'
         }).
        state('Main.LB', { url: '/LB', templateUrl: 'LBTemplates/LunchBox.html', controller: "lunchBoxCtrl" }).
        state('Main.Search', {
            url: '/Search', templateUrl: 'LBTemplates/Search.html', controller: "searchCtrl"
            //, onEnter: function ($rootScope) {
            //    $rootScope.$broadcast('selectTabChanged', 'Search');
            //}
        }).
        state('Main.View', { url: '/View', templateUrl: 'LBTemplates/ViewDish.html', controller: "viewDishCtrl" }).
        //state('Login', { url: '/Login', templateUrl: 'LBTemplates/Login.html', controller: "loginCtrl" }).
               state('FBLogin', { url: '/FBLogin', templateUrl: 'LBTemplates/FBLogin.html', controller: "FBLoginCtrl" }).
          state('Main.new', {
              url: '/new',
              templateUrl: 'AddTemplates/AddParent.html',
              controller: 'AddParentCtrl'
          }).state('Main.new.location', {
              url: '/location',
              templateUrl: 'AddTemplates/locations.html',
              controller: 'locationsCtrl'
          }).state("Main.new.newLocation", {
              url: '/newLocation',
              templateUrl: "AddTemplates/newLocation.html",
              controller: "newLocationCtrl"
          })
        .state("Main.new.dish", {
            url: '/dish',
            templateUrl: "AddTemplates/dishes.html",
            controller: "dishCtrl"
        }).state('photo', {
            url: '/photo',
            templateUrl: 'AddTemplates/photo.html',
            controller: 'photoCtrl'
        }).state('Main.new.newDish', {
            url: '/newDish',
            templateUrl: 'AddTemplates/newDish.html',
            controller: 'newDishCtrl'
        })
        .state('Main.new.addLB', {
            url: '/addLB',
            templateUrl: 'AddTemplates/addLB.html',
            controller: 'addLBCtrl'
        }).state('Main.new.fileLoad', {
            url: '/fileLoad',
            templateUrl: 'AddTemplates/fileLoad.html',
            controller: 'fileLoadCtrl'
        });


    $urlRouterProvider.otherwise('/FBLogin');
    //$urlRouterProvider.otherwise('/Main/Search');
    //$urlRouterProvider.otherwise('Main/new/location');
    //$urlRouterProvider.otherwise('/photo');
});

