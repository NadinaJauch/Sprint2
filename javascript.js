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
      '<li class="divider" >' + objeto.nombre + ": $" + objeto.gasto + "</li>"
    );

    calcularTotales();

    $("#total").html("<br>Total: $" + total);
    $("#promedio").html("Cada uno debe aportar: $ " + promedio);
    $("#nombre, #gasto").val("");
  }
}

function calcularTotales() {
  let totalAux = 0;

  for (let m of lista) {
    totalAux += parseInt(m.gasto);
  }

  total = totalAux;
  promedio = (total / lista.length).toFixed(2);
}
