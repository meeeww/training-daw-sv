window.onload = function (e) {
    document.getElementById("enlace_1").addEventListener("click", () => {
      if (document.getElementById("contenidos_1").style.display != "none") {
        document.getElementById("contenidos_1").style.display = "none";
      } else {
        document.getElementById("contenidos_1").style.display = "block";
      }
    });
    document.getElementById("enlace_2").addEventListener("click", () => {
      if (document.getElementById("contenidos_2").style.display != "none") {
        document.getElementById("contenidos_2").style.display = "none";
        document.getElementById("enlace2").innerHTML = "Mostrar contenidos";
      } else {
        document.getElementById("contenidos_2").style.display = "block";
        document.getElementById("enlace2").innerHTML = "Ocultar contenidos";
      }
    });
    document.getElementById("enlace_2").addEventListener("click", () => {
      if (document.getElementById("contenidos_2").style.display != "none") {
        document.getElementById("contenidos_2").style.display = "none";
      } else {
        document.getElementById("contenidos_2").style.display = "block";
      }
    });
  };