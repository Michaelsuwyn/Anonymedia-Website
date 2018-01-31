class HomeController {

constructor(PostService, UserService, $state, $stateParams){
  this.myName = this.username;
this.$stateParams = $stateParams;

  this.$state = $state;
  this.UserService = UserService;
  this.PostService = PostService;
  this.getAll();

  if (this.UserService.user) {
    this.myFriends = UserService.getFriends(this.UserService.user.id);
  }



}



deleteFriend(friendId){
  console.log(friendId);
  this.UserService.deleteFriend(this.UserService.user.id, {id: friendId}).then(
    () => {this.myFriends = this.UserService.getFriends(this.UserService.user.id)}
  );
}





viewFriend(id){
  this.$state.go("friendPage", {id: id});

}





  getAll(){
    this.Post = this.PostService.getAll();

}

create(){
  this.PostService.create({
    userId: this.UserService.user.id,
    content: this.content,
    timeCreated: new Date()

  })
  .then( () => this.getAll());

  this.userId = "";
  this.content = "";
  this.timeCreated = "";
  }

  delete(id){
    this.PostService.delete(id)
    .then(() => this.getAll());
  }


}

angular.module('myapp').controller("HomeController", HomeController);




