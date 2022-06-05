let total = 0;
let promedio = 0;
let lista = [];

function agregarMovimiento() {
  if ($("#nombre").val() != "" && $("#gasto").val() != "") {
    let objeto = new Object();

    objeto.nombre = $("#nombre").val();
    objeto.gasto = $("#gasto").val();
    lista.push(objeto);

    $("#grupo-list").append(
      '<li class="bg-light border rounded  w-50" >' +
        objeto.nombre +
        ": $" +
        objeto.gasto +
        "</li>"
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
