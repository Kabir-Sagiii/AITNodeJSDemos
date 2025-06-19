function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //---Logic---- 3sec
      console.log("fetched users data");
      var id = 101;
      resolve(id);
    }, 3000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //---Logic---- 2sec
      console.log("fetched users Post data", userId);
      var postId = 10001;
      resolve(postId);
    }, 2000);
  });
}

function getUserPostComments(postId) {
  setTimeout(() => {
    //-----Logic------- 1sec
    console.log("fetched users Post all Comments data", postId);
  }, 1000);
}

// getUsers()
//   .then((userId) => {
//     return getUserPosts(userId);
//   })
//   .then((postId) => {
//     getUserPostComments(postId);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function getData() {
  var userId = await getUsers();
  var postId = await getUserPosts(userId);
  getUserPostComments(postId);
}

getData();
