// Tenemos un li de productos

const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

const li = document.getElementById("lista-de-productos"); // Cambiado a getElementById
const $i = document.querySelector("input"); // Corregido el selector
const $filtrarBtn = document.getElementById("filtrarBtn"); // Seleccionar el botón por ID

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = productos[i].nombre;

  var imagen = document.createElement("img");
  imagen.setAttribute("src", productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d);
}

// Agregado evento al botón para realizar la filtración
$filtrarBtn.addEventListener("click", function () {
  const textoFiltrado = $i.value.toLowerCase();
  const productosFiltrados = filtrado(productos, textoFiltrado);

  // Limpiar la lista antes de mostrar los resultados filtrados
  li.innerHTML = "";

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productosFiltrados[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
});

const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) =>
      item.tipo.includes(texto) ||
      item.color.includes(texto) ||
      `${item.tipo} ${item.color}`.includes(texto) || // Busca coincidencias en ambos términos en cualquier orden
      `${item.color} ${item.tipo}`.includes(texto) // Invertir el orden para buscar en ambos sentidos
  );
};
