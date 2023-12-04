function getUsers() {
  var promiseobj = fetch("https://jsonplaceholder.typicode.com/users");
  promiseobj
    .then(function (res) {
      return res.json(); //promise,json,: it will add json data in promise and it return promise
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      alert("Something Went Wrong");
      console.log(err);
    });
}

function getFormData() {
  var usernameRef = document.getElementById("username");
  var username = usernameRef.value;

  var passwordRef = document.getElementById("password");
  var password = passwordRef.value;

  console.log(username, password);

  var usersinfo = {
    name: username,
    password: password,
  };

  fetch("url", {
    METHOD: "POST",
  });
}
