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
  if (cartContent.length === 1) {
    numProd.innerHTML = cartContent.length + " item";
  } else {
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
      titleCat.classList.add("titleCat");
      titleCat.classList.add("botMargin");
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
  nombreCategoria.classList.add("titleCat");
  nombreCategoria.classList.add("botMargin");
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
  nombreCategoria.classList.add("titleCat");
  nombreCategoria.classList.add("botMargin");
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
  nombreCategoria.classList.add("titleCat");
  nombreCategoria.classList.add("botMargin");
  nombreCategoria.innerHTML = "Desserts";
  titleName.appendChild(nombreCategoria);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      json[3].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.classList.add("cardWidth");
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
  nombreCategoria.classList.add("titleCat");
  nombreCategoria.classList.add("botMargin");
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

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let cart = document.getElementById("cartIcon");
function cargarCarroPedido() {
  let carritoProcesado = [];
  cartContent.forEach((element) => {
    let elemEncontrados = cartContent.filter((em) => em.name == element.name);
    let elemProces = {
      producto: element,
      cantidad: elemEncontrados.length,
    };
    carritoProcesado = carritoProcesado.filter(
      (elems) => elems.producto.name != elemProces.producto.name
    );
    carritoProcesado.push(elemProces);
  });

  let fila = document.getElementById("filaProductos");
  fila.innerHTML = " ";
  let nombreTit = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTit);
  let titulo = document.createElement("h3");
  titulo.classList.add("titleCat");
  titulo.classList.add("botMargin");
  titulo.innerHTML = "Order Detail";
  nombreTit.appendChild(titulo);

  let tabla = document.createElement("table");
  tabla.className = "table table-striped";
  let tHeader = document.createElement("thead");
  let trHead = document.createElement("tr");

  let thItem = document.createElement("th");
  let thQt = document.createElement("th");
  let thDesc = document.createElement("th");
  let thUnit = document.createElement("th");
  let thAm = document.createElement("th");
  let thMod = document.createElement("th");
  thItem.setAttribute("scope", "col");
  thItem.innerHTML = "Item";
  thQt.setAttribute("scope", "col");
  thQt.innerHTML = "Qty.";
  thDesc.setAttribute("scope", "col");
  thDesc.innerHTML = "Description";
  thUnit.setAttribute("scope", "col");
  thUnit.innerHTML = "Unit Price";
  thAm.setAttribute("scope", "col");
  thAm.innerHTML = "Amount";
  thMod.setAttribute("scope", "col");
  thMod.innerHTML = "Modify";
  trHead.appendChild(thItem);
  trHead.appendChild(thQt);
  trHead.appendChild(thDesc);
  trHead.appendChild(thUnit);
  trHead.appendChild(thAm);
  trHead.appendChild(thMod);
  tHeader.append(trHead);
  tabla.appendChild(tHeader);
  let tBody = document.createElement("tbody");
  let total = 0;
  carritoProcesado.forEach((em, index) => {
    let trBod = document.createElement("tr");

    let thIt = document.createElement("th");
    thIt.setAttribute("scope", "row");
    let thQ = document.createElement("td");
    let thDe = document.createElement("td");
    let thUn = document.createElement("td");
    let thA = document.createElement("td");
    let mod = document.createElement("td");
    thIt.innerHTML = index + 1;
    thQ.innerHTML = em.cantidad;
    thDe.innerHTML = em.producto.name;
    thUn.innerHTML = em.producto.price;
    let amountProd = em.producto.price * em.cantidad;
    thA.innerHTML = amountProd;
    total = total + amountProd;
    let modButAdd = document.createElement("a");
    modButAdd.className = "btn";
    modButAdd.setAttribute("id", "modButAdd");
    modButAdd.innerHTML = "+";
    modButAdd.classList.add("btnDark");
    let modButSub = document.createElement("a");
    modButSub.className = "btn";
    modButSub.setAttribute("id", "modButSub");
    modButSub.innerHTML = "-";
    modButSub.classList.add("btnDark");
    let i = 0;
    modButAdd.onclick = () => {
      i++;
      cartContent.push(em);
      thQ.innerHTML = em.cantidad + i;
      thA.innerHTML = em.producto.price * (em.cantidad + i);
      actualizarCantidad();
    };
    modButSub.onclick = () => {
      let indice = cartContent.lastIndexOf(em);
      if (indice !== -1) {
        i--;
        cartContent.splice(indice, 1);
        thQ.innerHTML = em.cantidad + i;
        thA.innerHTML = em.producto.price * (em.cantidad + i);
        actualizarCantidad();
      }
    };

    mod.appendChild(modButAdd);
    mod.appendChild(modButSub);

    trBod.appendChild(thIt);
    trBod.appendChild(thQ);
    trBod.appendChild(thDe);
    trBod.appendChild(thUn);
    trBod.appendChild(thA);
    trBod.appendChild(mod);

    tBody.appendChild(trBod);
  });
  tabla.appendChild(tBody);
  fila.appendChild(tabla);
  let divFinal = document.createElement("div");
  divFinal.className = "row";
  let totalText = document.createElement("p");
  totalText.className = "font-weight-bold";
  totalText.innerHTML = "Total: $" + total;

  let botones = document.createElement("div");
  botones.className = "row";

  let botonesHueco = document.createElement("div");
  botonesHueco.className = "col-6";
  let botCan = document.createElement("div");
  botonesHueco.className = "col";
  let botCon = document.createElement("div");
  botonesHueco.className = "col";

  let botonCancel = document.createElement("a");
  let botonConfirm = document.createElement("a");

  botonCancel.className = "btn";
  botonCancel.classList.add("cancel");
  botonCancel.style.float = "right";
  botonConfirm.className = "btn";
  botonConfirm.classList.add("confirm");
  botonConfirm.style.backgroundColor = "cornsilk";
  botonConfirm.style.float = "right";
  botonCancel.innerHTML = "Cancel";
  botonCancel.setAttribute("id", "botonCancel");
  botonCancel.setAttribute("type", "button");
  botonCancel.setAttribute("data-bs-toggle", "modal");
  botonCancel.setAttribute("data-bs-target", "#exampleModal");

  botonConfirm.innerHTML = "Confirm order";
  botonConfirm.onclick = () => {
    carritoProcesado.forEach((ele, index) => {
      console.log({
        item: index,
        quantity: ele.cantidad,
        description: ele.producto.name,
        unitPrice: ele.producto.price,
      });
      cartContent = [];
      let fila = document.getElementById("filaProductos");
      fila.innerHTML = " ";
      actualizarCantidad();
    });
  };

  botCan.appendChild(botonCancel);
  botCon.appendChild(botonConfirm);
  botones.appendChild(botonesHueco);
  botones.appendChild(botCan);
  botones.appendChild(botCon);
  divFinal.appendChild(totalText);
  divFinal.appendChild(botones);
  fila.appendChild(divFinal);
}
cart.onclick = () => {
  actualizarCantidad();
  cargarCarroPedido();
};

let btnModalConfirm = document.getElementById("modalConfirm");
btnModalConfirm.onclick = () => {
  cartContent = [];
  cargarCarroPedido();
  actualizarCantidad();
};

actualizarCantidad();
