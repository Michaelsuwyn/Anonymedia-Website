

class PostService{

  constructor($resource){
    this.PostResource = $resource("http://localhost:55771/api/Posts/:id");
  }


  getAll(){
    return this.PostResource.query();
  }

  get(id){
    return this.PostResource.get({id: id})
  }

  create(Post){
    return this.PostResource.save(Post).$promise;

  }
  delete(id){
    return this.PostResource.delete({id: id}).$promise;
  }


}

angular.module("myapp").service("PostService", PostService);
