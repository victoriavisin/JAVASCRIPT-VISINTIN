
/////////////////JSON////////////////////////

let carrito = document.querySelector (".carrito")
//console.log(listadoDeProductos)

//verifico si se guarda en el ordenador 

if (localStorage.getItem("listadoDeProductos")) {
   //console.log("esta guardado")
   
} else {
   //console.log("no esta guardado")
   localStorage.setItem("listadoDeProductos",JSON.stringify(listadoDeProductos));
   
}
 

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
      leerContenido (seleccionarProducto); // LE DOY FUNCIONALIDAD AL BOTON AGREGAR CARRITO
      //console.log(e.target.parentElement); 
   }
   
}

///////////////////////////ELIMINAR PRODUCTO///////////////////////////////

function eliminarProducto(e) {
   if (e.target.classList.contains("btn-add-cart")) {
      const eliminarId = e.target.getAttribute("data-id");
      comprar.forEach(value => {
        if (value.id == eliminarId) { // eliminar producto MODIFICAR
         let priceReduce = parseFloat(value.precio) * parseFloat(value.cantidad);
         totalCarrito = totalCarrito - priceReduce;
         totalCarrito = totalCarrito.toFixed(2);
         
        } 
      })
      comprar = comprar.filter (producto => producto.id !== eliminarId);
   }
   loadHtml();
}
//////////////////////////////// PRESENTO LOS PRODUCTOS////////////////////////////

function leerContenido (producto) {
   const infoProducto = {
      
      modelo: producto.querySelector(".card-title").textContent,
      precio: producto.querySelector(".card-text").textContent,
      id: producto.querySelector (".btn-add-cart").getAttribute ("data-id"),
      cantidad: 1
   }

   totalCarrito = parseFloat (totalCarrito) + parseFloat (producto.precio);
   totalCarrito = totalCarrito.toFixed(2); //modificar suma

 ////////////////////////////////////CANTIDAD//////////////////////////////////

   const exist = comprar.some (producto => producto.id === infoProducto.id);
   if (exist) {
      const pro = comprar.map (producto => {
         if (producto.id === infoProducto.id) {
            producto.cantidad++;
            return producto;
         } else {
           return producto // agregar cantidad
         }
      });
      comprar = [...pro];   
   } else {
      comprar = [...comprar, infoProducto]
   }
   loadHtml ();
   //console.log (infoProducto)
}

///////////////////////agregar productos al carrito///////////////////////////

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

      precioTotal.innerHTML = totalCarrito; //intento de suma de productos ()
      
   });
}

///////////////////////creo funcion para limpiar carrito///////////////////////////
function limpiarHTML () {
   contenedorCarrito.innerHTML = " ";
}



















