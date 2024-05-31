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
