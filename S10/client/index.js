function fnCreateFolder() {
  //write the logic to send a request to a server or backend app
  fetch("http://localhost:4646/create")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("response").innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
      alert("Seomthing went wrong");
    });
}

function fnDeleteFolder() {
  fetch("http://localhost:4646/delete")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("response").innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong");
    });
}
