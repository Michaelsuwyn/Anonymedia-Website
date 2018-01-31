
class FriendsController{


  constructor(UserService){
    this.myName = "Michael";



    this.UserService = UserService;
    this.getAll();
    this.friendsList = UserService.getFriends(this.UserService.user.id);
}

getAll(){
  this.users = this.UserService.getAll();
}


createFriend(friendId){
  console.log('made it');
  this.UserService.createFriend(this.UserService.user.id, { id: friendId });
  console.log(friendId);
}

}

angular.module('myapp').controller('FriendsController', FriendsController);
