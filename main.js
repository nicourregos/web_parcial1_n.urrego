// Nicolás Urrego Sandoval - 201815544

const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";
let cartContent = [];

let removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

let actualizarCantidad = () => {
  let numProd = document.getElementById("cartTxt");
  if(cartContent.length === 1)
  {
    numProd.innerHTML = cartContent.length + " item";
  }
  else
  {
    numProd.innerHTML = cartContent.length + " items";
  }
};

let btnBurgers = document.getElementById("burgers");

btnBurgers.onclick = () => {
  let fila = document.getElementById("filaProductos");
  fila.innerHTML = " ";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let titleName = document.getElementById("nombreCategoria");
      removeAllChildNodes(titleName);
      let titleCat = document.createElement("h3");
      titleCat.innerHTML = "Burgers";
      titleName.appendChild(titleCat);

      json[0].products.forEach((element) => {
        let col = document.createElement("div");
        col.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let titleCard = document.createElement("h5");
        titleCard.className = "card-title";
        titleCard.innerHTML = element.name;
        body.appendChild(titleCard);

        let textCard = document.createElement("p");
        textCard.className = "card-text";
        textCard.innerHTML = element.description;
        body.appendChild(textCard);

        let priceCard = document.createElement("p");
        priceCard.className = "card-text font-weight-bold";
        priceCard.innerHTML = "$" + element.price;
        body.appendChild(priceCard);

        let btnCart = document.createElement("a");
        btnCart.className = "btn btn-dark";
        btnCart.innerHTML = "Add to cart";
        btnCart.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          cartContent.push(producto);
          actualizarCantidad();
        };

        body.appendChild(btnCart);

        card.appendChild(body);

        col.appendChild(card);
        fila.appendChild(col);
      });
    });
};

let btnTacos = document.getElementById("tacos");
btnTacos.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let titleName = document.getElementById("nombreCategoria");
  removeAllChildNodes(titleName);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Tacos";
  titleName.appendChild(nombreCategoria);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json[1].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let titleCard = document.createElement("h5");
        titleCard.className = "card-title";
        titleCard.innerHTML = element.name;
        body.appendChild(titleCard);

        let textCard = document.createElement("p");
        textCard.className = "card-text";
        textCard.innerHTML = element.description;
        body.appendChild(textCard);

        let priceCard = document.createElement("p");
        priceCard.className = "card-text font-weight-bold";
        priceCard.innerHTML = "$" + element.price;
        body.appendChild(priceCard);

        let btnCart = document.createElement("a");
        btnCart.className = "btn btn-dark";
        btnCart.innerHTML = "Add to car";
        btnCart.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          cartContent.push(producto);
          actualizarCantidad();
        };

        body.appendChild(btnCart);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnSalads = document.getElementById("salads");
btnSalads.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";

  let titleName = document.getElementById("nombreCategoria");
  removeAllChildNodes(titleName);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Salads";
  titleName.appendChild(nombreCategoria);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json[2].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let titleCard = document.createElement("h5");
        titleCard.className = "card-title";
        titleCard.innerHTML = element.name;
        body.appendChild(titleCard);

        let textCard = document.createElement("p");
        textCard.className = "card-text";
        textCard.innerHTML = element.description;
        body.appendChild(textCard);

        let priceCard = document.createElement("p");
        priceCard.className = "card-text font-weight-bold";
        priceCard.innerHTML = "$" + element.price;
        body.appendChild(priceCard);

        let btnCart = document.createElement("a");
        btnCart.className = "btn btn-dark";
        btnCart.innerHTML = "Add to car";
        btnCart.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          cartContent.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCart);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnDesserts = document.getElementById("desserts");
btnDesserts.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let titleName = document.getElementById("nombreCategoria");
  removeAllChildNodes(titleName);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Desserts";
  titleName.appendChild(nombreCategoria);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json[3].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let titleCard = document.createElement("h5");
        titleCard.className = "card-title";
        titleCard.innerHTML = element.name;
        body.appendChild(titleCard);

        let textCard = document.createElement("p");
        textCard.className = "card-text";
        textCard.innerHTML = element.description;
        body.appendChild(textCard);

        let priceCard = document.createElement("p");
        priceCard.className = "card-text font-weight-bold";
        priceCard.innerHTML = "$" + element.price;
        body.appendChild(priceCard);

        let btnCart = document.createElement("a");
        btnCart.className = "btn btn-dark";
        btnCart.innerHTML = "Add to car";
        btnCart.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          cartContent.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCart);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnDrinks = document.getElementById("drinks");
btnDrinks.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let titleName = document.getElementById("nombreCategoria");
  removeAllChildNodes(titleName);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Drinks";
  titleName.appendChild(nombreCategoria);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json[4].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let titleCard = document.createElement("h5");
        titleCard.className = "card-title";
        titleCard.innerHTML = element.name;
        body.appendChild(titleCard);

        let textCard = document.createElement("p");
        textCard.className = "card-text";
        textCard.innerHTML = element.description;
        body.appendChild(textCard);

        let priceCard = document.createElement("p");
        priceCard.className = "card-text font-weight-bold";
        priceCard.innerHTML = "$" + element.price;
        body.appendChild(priceCard);

        let btnCart = document.createElement("a");
        btnCart.className = "btn btn-dark";
        btnCart.innerHTML = "Add to car";
        btnCart.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          cartContent.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCart);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let cart = document.getElementById("carrito");

actualizarCantidad();
