let mensaje=localStorage.getItem("mensajeLocal")

console.log(mensaje)

let productos = [
    {
        id: "1",
        name: "cocina",
        price: 12000,
        Img:"http://picsum.photos/200/300",
        description: "cocina de herreria",
    },
    {
        id: "2",
        name: "mesa",
        price: 2500,
        Img: "http://picsum.photos/200/300",
        descripcion:"mesa de herreria",
    },
    {
        id: "3",
        name: "mueble",
        price: 5000,
        Img: "http://picsum.photos/200/300",
        description: "mueble de herreria con madera",
    },
    {
        id: "4",
        name: "repisa",
        price: 2500,
        Img: "http://picsum.photos/200/300",
        descripcion:"repisa de herreria",
    },
    
    {
        id: "5",
        name: "repisa rombo",
        price: 2000,
        Img:"http://picsum.photos/200/300" ,
        descripcion:"perisa rombo de herreria con madera",
    },




];

let prd =localStorage.setItem("product",JSON.stringify(productos))

function mostrarProductos(){
  let contenedor = document.querySelector("#productos");

  for (const product of productos ) {
    contenedor.innerHTML += 
    `
    <div class="card" id=${product.id}>
      <img src=${product.Img} alt=${product.description}>
      <div class="card-produtos">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <b>${product.price}</b>
        <button-type class="agregar-carrito" data-id=${product.id}>Agregar</button-type>
      </div>
    </div>
     `
  } 
  document.querySelectorAll(".agregar-carrito").forEach(btn=> {
    btn.addEventlisterent("click",() =>{
      const productID = getAttribute( "data-id");
      agregarAlcarrito(productID);
    })
  })
}

function agregarAlcarrito(productoID){
 let carrito = JSON.parse(localStorage.getItem("carrito"))|| [];
 const products = productos.find(product => product.id = productoID)

 const productosEnCarrito = carrito.find(p => p.id = productoID);

 if(productosEnCarrito){
  productosEnCarrito.cantidad += 1;
  productosEnCarrito.totalPrice = productosEnCarrito.cantidad *productosEnCarrito.price;
 } else{
  carrito.push({
    id: productoID,
    name: products.name,
    price: products.price,
    cantidad:1,
    totalPrice: products.price
  })
 }
 localStorage.setItem("carrito", JSON.stringify(carrito))

 mostrarCarrito()
}

function mostrarCarrito(){
  let carrito = JSON.parse(localStorage.getItem("carrito"))|| [];
  let contenedorCarrito = document.querySelector("#contenedor-carrito");
  let footer = document.querySelector("#carrito-footer")

  carrito.forEach((p) => {
   contenedorCarrito.innerHTML += `
   <div class="card-carrito" id=${product.id}>
     <h3>${product.name}</h3>
     <p>$${product.price}</p>
     <p>Cantidad: ${p.cantidad}</p>
     <p>Total:$${p.totalPrice}</p>
 </div>
   `
  })
let totalCarrito= carrito.reduce((acc, p) => acc + p.totalPrice, 0)

  footer.innerHTML =`<p> Total: $${totalCarrito}</p>`
 
}
mostrarProductos()
mostrarCarrito()