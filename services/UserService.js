class UserService {

  constructor($resource) {
    this.userResource = $resource("http://localhost:55771/api/Users/:action", {}, {
    delete: {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
         hasBody: true
    }
});

this.user = null;

  }

  isLoggedIn() {
             return false;
         }




register(user) {
  return this.userResource.save({action: 'register'}, user).$promise;
}

login(user) {
  return this.userResource.save({action: 'login'}, user).$promise;
}


get(id){
  return this.userResource.get({id: id})
}

getAll(){
  return this.userResource.query();
}

getFriends(id){
  return this.userResource.query({action: id + '/friends'});
}

createFriend(id, friend){
  return this.userResource.save({action: id + '/friends'}, friend).$promise;
}
deleteFriend(id, friend){
  console.log('made it to userService');
  console.log(friend);
  return this.userResource.delete({action: id + '/friends'}, friend).$promise;
}
}

angular.module('myapp').service("UserService", UserService);
