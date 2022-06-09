let total = 0;
let promedio = 0;
let lista = [];
let efectivoCheck = false;
let efectivo = "";

function pagoEfectivo() {
  efectivoCheck = !efectivoCheck;
}
function agregarMovimiento() {
  if ($("#nombre").val() != "" && $("#gasto").val() != "") {
    let objeto = new Object();
    objeto.nombre = $("#nombre").val();
    objeto.gasto = $("#gasto").val();
    objeto.fecha = new Date().toLocaleString();
    lista.push(objeto);

    if (efectivoCheck == true) {
      console.log("Hola");
      efectivo = "Pagó en efectivo";
    } else {
      efectivo = "No pagó en efectivo";
    }
    $("#grupo-list").append(
      '<li class="bg-light border rounded  d-flex" ><ul>' +
        "<li>" +
        objeto.nombre +
        ": $" +
        objeto.gasto +
        ", " +
        "</li>" +
        "<li>" +
        efectivo +
        "</li>" +
        "<li>Fecha: " +
        objeto.fecha +
        "</li>" +
        "</ul></li>"
    );

    calcularTotales();
    $("#total").html("<br>Total: $" + total);
    $("#promedio").html("Cada uno debe aportar: $" + promedio);
    $("#nombre, #gasto").val("");
  }
}

function calcularTotales() {
  total = 0;

  for (let m of lista) {
    total += parseInt(m.gasto);
  }

  promedio = (total / lista.length).toFixed(2);
}
