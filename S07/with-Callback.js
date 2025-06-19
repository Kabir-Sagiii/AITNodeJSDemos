function getUsers(callback) {
  setTimeout(() => {
    //---Logic---- 3sec
    console.log("fetched users data");
    var id = 101;
    callback(id);
  }, 3000);
}

function getUserPosts(userId, callback) {
  setTimeout(() => {
    //---Logic---- 2sec
    console.log("fetched users Post data", userId);
    var postId = 10001;
    callback(postId);
  }, 2000);
}

function getUserPostComments(postId) {
  setTimeout(() => {
    //-----Logic------- 1sec
    console.log("fetched users Post all Comments data", postId);
  }, 1000);
}

getUsers(function (userId) {
  getUserPosts(userId, function (postId) {
    getUserPostComments(postId);
  });
});
