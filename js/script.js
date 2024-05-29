const boton = document.getElementById("boton");
const formulario = document.getElementById("formulario");

boton.addEventListener("click", () => {
  // Verifica si el formulario está visible
  if (formulario.style.display === "none") {
    // Si está oculto lo muestra
    formulario.style.display = "block";
  } else {
    // Si está visible lo oculta
    formulario.style.display = "none";
  }
});

// Cerrar el formulario al pulsar la tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    formulario.style.display = "none";
  }
});

//listado de productos
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((productos) => {
    let listado = document.getElementById("product-list");
    let html = "";
    listado.innerHTML = html;
    productos.forEach((producto) => {
      if (
        producto.category === "men's clothing" ||
        producto.category === "women's clothing"
      ) {
        html += `
                <div class="card">
                    <img src="${producto.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                         <h5 class="card-title">${
                           producto.title.lenght < 20
                             ? producto.title
                             : producto.title.slice(0, 20) + "..."
                         }</h5>
                        <p class="card-text">${
                          producto.description.lenght < 50
                            ? producto.description
                            : producto.description.slice(0, 50) + "..."
                        }</p>
                        <p>$${producto.price}</p>
                    </div>
                </div>
                `;
      }

      //console.log(producto);
      listado.innerHTML = html;
    });
    document.appendChild(listado);
  })
  .catch((err) => console.log(err));
