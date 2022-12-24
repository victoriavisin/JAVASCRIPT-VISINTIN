 
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



//////////////////////////////////////JAVASCRIPT FINAL//////////////////////////////////////////////////////////////

//Variables
// const verCarrito = document.querySelector ("#btn-carrito")
// const modalCointainer = document.querySelector ("#modal-container")


//  //Evento
// const productos = document.querySelectorAll(".card");
//  productos.forEach((card) => {
//   card.addEventListener("click", (e) => {
//      leerProducto(e.target.parentElement);
//   });
//  });

//  //Array vacio para guardar los productos
// let productosCarrito = [];

// function leerProducto(producto) {
// const infoProducto = {
//      titulo: producto.querySelector(".card-title").textContent,
//      precio: producto.querySelector(".card-text").textContent,
//    };

//    //Agrega elementos al carrito
//   productosCarrito = [...productosCarrito, infoProducto];

//   carritoHTML();
//  }



//  const carrito = document.querySelector(".carrito");

//  function carritoHTML() {
//    //Limpiar el HTML
//   limpiarHTML();

//    productosCarrito.forEach((producto) => {
//      const row = document.createElement("div");
//      row.innerHTML = `
//      <div class="container">
//      <h5>${producto.titulo}</h5>
//      <p>${producto.precio}</p>
//      <button class="btn btn-danger">Eliminar</button>
//      </div>
            
//      `;
//      carrito.appendChild(row);
//    });
//  }


/////////////////////////////////////////





///////////////////////////////////////


// function limpiarHTML() {
//   carrito.innerHTML = "";
//  }


     



///////////////////////////////////////////////////////////////////////////////////////////////////////////

// // VARIABLES

// const contenido = document.querySelector (".card")
// const verCarrito = document.querySelector ("#btn-carrito")
// const modalCointainer = document.querySelector ("#modal-container")


// // ARRAY 

// let carrito = [];

// // EVENTO

// const productos = document.querySelectorAll(".card");
//   productos.forEach((card) => {
//   card.addEventListener("click", (e) => {
//      leerProducto(e.target.parentElement);
//   });
// });

// // FUNCIONES


  

// function leerProducto(producto) {
//   const infoProducto = {
//    titulo: producto.querySelector(".card-title").textContent,
//    precio: producto.querySelector(".card-text").textContent,
//    };
  
//   //Agregar elementos al carrito

//    productosCarrito = [...productosCarrito, infoProducto];
  
//    carritoHTML(); // QUE FUNCION TIENE ?
//    }


// // MODAL

//    verCarrito.addEventListener ("click", () => {
//     const modalHeader = document.createElement ("div");
//     modalHeader.className = "modal-header"
//     modalHeader.innerHTML = ` 
//     <h1 class= "modal-header-title">MI CARRITO</h1>
//     `;
//     modalCointainer.appendChild (modalHeader)

//     const modalBoton = document.createElement ("p")
//     modalBoton.className = "modal-header-boton"
//     modalBoton.innerText = "x" ;

//     modalHeader.appendChild (modalBoton)
    


//     productosCarrito.forEach((producto) => {
//        let contenidoCarrito = document.createElement("div");
//        contenidoCarrito.className = "modal-carrito"
//        contenidoCarrito.innerHTML = `
//           <div class="container">
//           <h5>${producto.titulo}</h5>
//           <p>${producto.precio}</p>
//           <button class="btn btn-danger">Eliminar</button>
//           </div>           
//          `;

//          modalCointainer.appendChild (contenidoCarrito)

  

//    });

//   });



//////////////////////////////////ULTIMO INTENTO/////////////////////////////////////////////////

// VARIABLES 

let todosLosProductos = document.querySelector (".productos");
let contenedorCarrito = document.querySelector (".offcanvas-body");
let precioTotal = document.querySelector (".price-total")

let comprar = [];
let totalCarrito = 0;


//FUNCIONES 

loadEventListenrs ();

function loadEventListenrs(){
   todosLosProductos.addEventListener("click", agregarProducto);
   contenedorCarrito.addEventListener ("click", eliminarProducto);
}
  

function agregarProducto (e) {
   e.preventDefault();
   if (e.target.classList.contains("btn-add-cart")) {
      const seleccionarProducto = e.target.parentElement;
      leerContenido (seleccionarProducto); 
      //console.log(e.target.parentElement); 
   }
   
}

function eliminarProducto(e) {
   if (e.target.classList.contains("btn-add-cart")) {
      const eliminarId = e.target.getAttribute("data-id");
      comprar.forEach(value => {
        if (value.id == eliminarId) {
         let priceReduce = parseFloat(value.precio) * parseFloat(value.cantidad);
         totalCarrito = totalCarrito - priceReduce;
         totalCarrito = totalCarrito.toFixed(2);
         
        } 
      })
      comprar = comprar.filter (producto => producto.id !== eliminarId);
   }
   loadHtml();
}

function leerContenido (producto) {
   const infoProducto = {
      
      modelo: producto.querySelector(".card-title").textContent,
      precio: producto.querySelector(".card-text").textContent,
      id: producto.querySelector (".btn-add-cart").getAttribute ("data-id"),
      cantidad: 1
   }

   totalCarrito = parseFloat (totalCarrito) + parseFloat (producto.precio);
   totalCarrito = totalCarrito.toFixed(2);



   const exist = comprar.some (producto => producto.id === infoProducto.id);
   if (exist) {
      const pro = comprar.map (producto => {
         if (producto.id === infoProducto.id) {
            producto.cantidad++;
            return producto;
         } else {
           return producto 
         }
      });
      comprar = [...pro];   
   } else {
      comprar = [...comprar, infoProducto]
   }
   loadHtml ();
   //console.log (infoProducto)
}

function loadHtml () {
   limpiarHTML ();
   comprar.forEach(producto => {
      const {imagen,modelo,precio,id,cantidad} = producto;
      const row =document.createElement ("div")
      row.classList.add(".offcanvas");
      row.innerHTML = `
       <div class="card h-100">
                <div class="card-body text-center">
                  <h5 class="card-title-item">${producto.modelo}</h5>
                  <p class="card-text-item">${producto.precio}</p>
                  <h6 class="cantidad-item">Cantidad: ${cantidad}</h6>
                  <a href="" data-id=" " class="btn-add-cart btn-lg" id="boton-eliminar">ELIMINAR</a>
                </div>
              </div>

      `;
      contenedorCarrito.appendChild (row);

      precioTotal.innerHTML = totalCarrito;
      
   });
}

function limpiarHTML () {
   contenedorCarrito.innerHTML = " ";
}

///////////////////////FORMULARIO///////////////////////////

















