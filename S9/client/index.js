function fnCreateFolder() {
  //write the logic to send a request to a server or backend app
  fetch("http://localhost:4646")
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
