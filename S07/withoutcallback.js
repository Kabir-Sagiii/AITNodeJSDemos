function getUsers() {
  //---Logic---- 3sec
  console.log("fetched users data");
  var id = 101;
  getUserPosts(id);
}

function getUserPosts(userId) {
  //---Logic---- 2sec
  console.log("fetched users Post data", userId);
  var postId = 10001;
  getUserPostComments(postId);
}

function getUserPostComments(postId) {
  //-----Logic------- 1sec
  console.log("fetched users Post all Comments data", postId);
}

getUsers();

//It works only if all the instruction or code is synchronous
