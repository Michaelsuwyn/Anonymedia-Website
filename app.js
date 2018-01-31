
angular.module('myapp',['ui.router', 'ngResource', 'ui.bootstrap']).config(routing);

routing.$inject =['$stateProvider', '$urlRouterProvider', '$locationProvider'];




function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'views/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  })
   .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    controllerAs: 'vm',
    data: {
                  requiresAuthentication: true
                }
  })

  .state('friendPage', {
   url: '/friendPage/:id',
   templateUrl: 'views/friendPage.html',
   controller: 'HomeController',
   controllerAs: 'vm',
   data: {
                 requiresAuthentication: true
               }
  })



    .state('friends', {
      url: '/friends',
      templateUrl: 'views/friends.html',
      controller: 'FriendsController',
      controllerAs: 'vm',
      data: {
                  requiresAuthentication: true
                }
    })

    .state('newsfeed', {
      url: '/newsfeed',
      templateUrl: 'views/newsfeed.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      data: {
                  requiresAuthentication: true
                }
    })

    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });




    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
}

angular.module('myapp').run(($rootScope, $state, UserService) => {
           $rootScope.$on('$stateChangeStart', (e, to) => {
               // protect non-public views
               if (to.data && to.data.requiresAuthentication) {
                 console.log('private');
                   if (!UserService.user || !UserService.user.id) {
                       e.preventDefault();
                       $state.go('login');
                   }
               }
           });
   });
