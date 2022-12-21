 
// //  <==================MENSAJE DE BIENVENIDA=========================>
 
//  function mostrarMensaje (){
//     alert("¡Bienvenido a Xcasacas!");
//  }
//  mostrarMensaje ();



// //  <==================OBJETOS CONSTRUCTORES/ARRAY PARA INCORPORAR PRODUCTOS=========================>

// class producto { 
//     constructor (producto, costo) {
//     this.producto = producto.toUpperCase ()
//     this.costo =  parseFloat (costo)
//     this.disponible = true
//     }
//     costoEnvio () {
//         this.costo = this.costo + 300;
//     }
// }


// const productosDisponibles = [];
//    productosDisponibles.push (new producto ("Rusia",10000))
//    productosDisponibles.push (new producto ("PSG",15500))
//    productosDisponibles.push (new producto ("Inter",9000))

//    for (const producto of productosDisponibles)

//    producto.costoEnvio();

//    console.log(productosDisponibles)





// //  <==================SIMULADOR=========================>

// function solicitarProducto () {
//     let camiseta = prompt ("Ingrese modelo de camiseta")
//     alert ("La camiseta ingresada es"+ " " + camiseta)
//     let monto = parseInt (prompt ("Ingrese el monto"));
//     alert ("El monto es"+ " " + monto)
//     }


// solicitarProducto();



// let monto = parseInt (prompt ("Ingrese nuevamente su monto"));
// let costo = parseInt (prompt ("Ingrese el costo de envio"));

// let suma = monto + costo

// alert("Su total es" + " " + suma);



// //  <==================AGREGO NUEVOS PRODUCTOS/ARRAY/MAP=========================>

// const nuevosProductos = [
//     {producto: 'Portugal', costo: 5000},
//     {producto: 'Galatasaray', costo: 6500},
//     {producto: 'Australia', costo: 17500},
    
// ]

// const productos = nuevosProductos.map((el) => el.producto)
// console.log(productos)

// const actualizado = nuevosProductos.map((el) => {
//     return {
//         nombre: el.producto,
//         precio: el.costo + 300
//     }
// })

// console.log(actualizado)


// <=============================PREENTREGA TRES======================================>


// //VARIABLES

// let todosLosProductos = document.querySelector ('.productos');
// let imagenProductos = document.querySelector ('.card-img-top');
// let tituloProductos = document.querySelector ('card-body');
// let precioProductos = document.querySelector ('card-text');


// let comprar = [];
// let total = 0;
// let contarProducto = 0;

// // FUNCIONES

// loadEventListenrs ();
// function loadEventListenrs (){
//     todosLosProductos.addEventListenrs ('click', agregarProducto);

    
// }

// function agregarProducto(e) {
//     e.preventDefault();
//     if (e.target.classlist.contains('#btn-carrito')) {
//         console.log (e.target);
//     }
// }


////////////////////////////////////////////////////

// const productos = document.querySelectorAll(".card");
// productos.forEach((card) => {
//   card.addEventListener("click", (e) => {
//     leerProducto(e.target.parentElement);
//   });
// });

// //Array vacio para guardar los productos
// let articulosCarrito = [];

// function leerProducto(producto) {
//   const infoProducto = {
//     titulo: producto.querySelector(".card-title").textContent,
//     precio: producto.querySelector(".card-text").textContent,
//   };

// }
   

//////////////////////////////////////////////

// const cards = document.querySelectorAll (".card")
// cards.forEach ((card) => {
//     card.addEventListener ('click', (e) => {
//         leerProducto (e.target.parentElement);
//     })
// })

// let productosCarrito = [];


// function leerProducto (producto) {
//     const infoProducto = {
//         titulo: producto.querySelector ( ".card-title").textContent,
//         precio: producto.querySelector (".card-text").textContent
//     };

//     productosCarrito = [...productosCarrito, infoProducto];
//     console.log (productosCarrito)
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////








const productos = document.querySelectorAll(".card");
productos.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerProducto(e.target.parentElement);
  });
});

//Array vacio para guardar los productos
let productosCarrito = [];

function leerProducto(producto) {
  const infoProducto = {
    titulo: producto.querySelector(".card-title").textContent,
    precio: producto.querySelector(".card-text").textContent,
  };

  //Agrega elementos al carrito
  productosCarrito = [...productosCarrito, infoProducto];
  console.log(productosCarrito);

  carritoHTML();
}



const carrito = document.querySelector(".carrito");

function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  productosCarrito.forEach((producto) => {
    const row = document.createElement("div");
    row.innerHTML = `
    <div class="container">
    <h5>${producto.titulo}</h5>
    <p>${producto.precio}</p>
    <button class="btn btn-danger">Eliminar</button>
    </div>
            
    `;
    carrito.appendChild(row);
  });
}







function limpiarHTML() {
  carrito.innerHTML = "";
}






























