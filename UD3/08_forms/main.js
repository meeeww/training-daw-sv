window.onload = function () {
  document.getElementById("submit").disabled = true;
  document.getElementById("opciones").disabled = true;

  document.getElementById("pregunta_si").onchange = comprobarFirstCheck;
  document.getElementById("pregunta_no").onchange = comprobarFirstCheck;
  document.getElementById("pregunta_nsnc").onchange = comprobarFirstCheck;

  document.getElementById("condiciones").onchange = comprobarAmbosMarcados;
  document.getElementById("privacidad").onchange = comprobarAmbosMarcados;
};

function comprobarAmbosMarcados() {
  if (document.getElementById("condiciones").checked && document.getElementById("privacidad").checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}

function comprobarFirstCheck() {
  if (document.getElementById("pregunta_si").checked) {
    document.getElementById("opciones").disabled = false;
  } else {
    document.getElementById("opciones").disabled = true;
  }
}