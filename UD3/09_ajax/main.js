window.onload = function () {
  console.log("document loaded");

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };

  var respuesta = xhttp.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
  xhttp.send();

  console.log(respuesta);
};
