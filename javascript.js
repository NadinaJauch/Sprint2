let total = 0;
let promedio = 0;
let lista = [];
let efectivoCheck = false;
let efectivo = "";

function pagoEfectivo() {
  efectivoCheck = !efectivoCheck;
}
function agregarMovimiento() {
  let nombre = document.getElementById("nombre").value;
  let gasto = document.getElementById("gasto").value;
  let fecha = new Date().toLocaleString();
  if (nombre != "" && gasto != "") {
    let objeto = new Object();
    objeto.nombre = nombre;
    objeto.gasto = gasto;
    objeto.fecha = fecha;
    lista.push(objeto);

    if (efectivoCheck == true) {
      efectivo = "Pagó en efectivo";
    } else {
      efectivo = "No pagó en efectivo";
    }
    let ul = document.getElementById("grupo-list");
    let li = document.createElement("li");
    li.className = "class= bg-light border rounded  d-flex";
    let ul2 = document.createElement("ul");
    let liNombreGasto = document.createElement("li");
    let liEfectivo = document.createElement("li");
    let liFecha = document.createElement("li");
    liNombreGasto.textContent = nombre + ": $" + gasto;
    liEfectivo.textContent = efectivo;
    liFecha.textContent = fecha;

    ul2.append(liNombreGasto);
    ul2.append(liEfectivo);
    ul2.append(liFecha);
    li.append(ul2);
    ul.append(li);

    calcularTotales();
    document.getElementById("total").innerHTML = "<br>Total: $" + total;
    document.getElementById("promedio").innerHTML =
      "Cada uno debe aportar: $" + promedio;
    nombre = "";
    gasto = "";
  }
}

function calcularTotales() {
  total = 0;

  for (let m of lista) {
    total += parseInt(m.gasto);
  }

  promedio = (total / lista.length).toFixed(2);
}
