class LoginController{


constructor(UserService, $state){

  this.$state = $state;
  this.UserService = UserService;



}



login(){
  this.UserService.login({username: this.username, password: this.password}) // this creates the user to pass into the Userservice(User)
    .then((data) =>{
      this.UserService.user = data; //save to service so you can access it everywhere
      this.user = this.UserService.user;
      this.$state.go("home");
    });

}




register(){
  this.UserService.register({username: this.username, password: this.password})
  .then((data) => {
    this.registerConf = data;
  });
}
}



angular.module('myapp').controller('LoginController', LoginController);
