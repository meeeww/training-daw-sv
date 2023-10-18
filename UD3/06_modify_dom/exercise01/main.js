window.onload = function (e) {
  console.log("documento cargado");

  document.getElementsByTagName("h2")[1].innerText = "Titulo Cambiado";

  document.getElementById("username");

  document.querySelectorAll(".first").forEach((elemento) => {
    if (elemento.parentElement.tagName != "NAV") {
      elemento.style.color = "blue";
    }
  });

  document.querySelectorAll("li").forEach((elemento) => {
    if (elemento.className == "item") {
      console.log(elemento.className);
    }
  });

  document.querySelectorAll("button").forEach((elemento) => {
    if (elemento.parentElement.className == "buttons") {
      elemento.style.color = "yellow"
    }
  });

  document.getElementsByTagName("p")[0].style.color = "red";
};
