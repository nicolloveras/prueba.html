

// // EJERCICIO COMPLEMENTARIO N1

// let jugadores = '';
// for (let index = 0; index < 5; index++) {
//     jugadores += prompt("INGRESAR JUGADORES")+"\n";
// }
// alert(jugadores);









// //EJERCICIO DESAFIO FUNCIONES
// let dinero = parseInt(prompt("¿cual es el monto de la compra?"));
 



//  function descuento(){
//     if (dinero>=1000){
//         alert("tenes un descuento del 20%");
//         alert("te queda en" + " " + (dinero - dinero*20/100));}
//     else {
//     alert("no hay descuento")
//  }
   
// }
// descuento();



// let entrada    = prompt("INGRESAR PRODUCTOS");
// let ingresados = '';
// while (entrada != 'ESC') {
//     ingresados += entrada +"\n";
//     entrada     = prompt("INGRESAR PRODUCTOS");
//     valor = prompt("ingrese el valor del producto")
// }
// alert(ingresados);

// DESAFIO ECOMMERCE
// const productos = [
//     {nombre : "cabernet", precio:3000},
//     {nombre: "sira", precio:4000},
//     {nombre: "tannat", precio:2500},
//     {nombre: "malbec", precio:2000},
//     {nombre: "bonarda", precio:8000 },
//     {nombre: "merlot", precio:3500},
// ];

// let carrito = []
// let seleccion = prompt("Hola! Desea realizar alguna compra?")

// while (seleccion != "si" && seleccion != "no"){
//     alert("por favor ingrese si o no")
//     // seleccion = prompt("Desea realizar alguna compra?")
// }

// if (seleccion == "si"){
//     alert("Estos son nuestros productos")
//     let todosLosProductos = productos.map (
//         (producto) => producto.nombre + " " + producto.precio + "$"
//     );
//     alert(todosLosProductos.join (" - "))
// } else if (seleccion = "no"){
//     alert("gracias por elegirnos")
// }

// while (seleccion != "no"){
//     let producto = prompt("agregue un producto a su carrito")
//     let precio = 0

// if (producto == "cabernet" || producto == "sira"|| producto == "tannat"|| producto == "malbec" || producto == "bonarda" || producto == "merlot" ){
//     switch (producto) {
//         case "cabernet":
//             precio = 3000;
//             break;
//         case "sira":
//             precio = 4000;
//             break;
//         case "tannat":
//             precio = 2500;
//             break;
//         case "malbec":
//             precio = 2000;
//             break;
//         case "bonarda":
//             precio = 8000;
//             break;
//         case "merlot":
//             precio = 3500;
//             break;
//         default:
//             break
        

           
//     }
// let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

// carrito.push({producto, unidades, precio})
// console.log (carrito)
// } else {
//     alert("no tenemos ese producto")
// }

// seleccion = prompt("desea seguir comprando?")

// while (seleccion === "no"){
//     alert("gracias por su compra")
//     carrito.forEach((carritoFinal) =>{
//         console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
//     })
//     break;
// }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio *el.unidades, 0)
// console.log (`el total a pagar por su compra es: ${total}`);

// if ( total >= 5000){
//     alert("tenes un descuento del 20%");
//     alert("te queda en" + " " + (total - total*20/100))
//     console.log(("te queda en" + " " + (total - total*20/100)))}
//         else {
//         alert("no hay descuento")

// let edad = prompt("ingrese su edad");
// while (edad < 18){
//     alert("usted es menor de edad, no puede comprar")
//     edad = prompt("ingrese su edad")
    
// }
 
Swal.fire({
    title: '¿Eres mayor de edad?',
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Puedes comprar!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Sera mejor que pidas ayuda a un adulto', '', 'error')
    }
  })


const productos = [
    {id:0,nombre : "cabernet", precio:3000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUtm3i11YT24I_p1XETSMTd4M4k5eTqqPKw&usqp=CAU",boton:"Agregar al carro" },
    {id:1,nombre: "sira", precio:4000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbLhuV58bUxq0yt3hRzvfwsBQ3fFMoL1wP0yAI5JbLMPJsFgRz1WXOrGQQ9hR6o0XQoE&usqp=CAU",boton:"Agregar al carro"},
    {id:2,nombre: "tannat", precio:2500, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjHetz7ILK_s3HHVEU1oPTgroRXC0xTNAGA&usqp=CAU",boton:"Agregar al carro"},
    {id:3,nombre: "malbec", precio:2000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZiWEc_Mt6JFahcifvCbIv9RKIo0jqEjozlkb1-Ya7_5CT4ack2icZp8TgDCXDmNKuvyU&usqp=CAU",boton:"Agregar al carro"},
    {id:4,nombre: "bonarda", precio:8000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwq92MjRXiUXsb1bGSyFZmaRmGc9jVhhLHw&usqp=CAU",boton:"Agregar al carro" },
    {id:5,nombre: "merlot", precio:3500, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtlaWgVseBrw8UCuBIGt5s0K4OLdtxXwtvEsHh4zG4ttz8YwalAG90DPbwcEKDreTi5Q&usqp=CAU",boton:"Agregar al carro"},
];
let productosEnFormatoJSON = JSON.stringify(productos);
localStorage.setItem("productosEnFormatoJASON", productosEnFormatoJSON);
let carrito = [];

function renderProducto() {
    let html = "";
    for ( let i = 0; i <productos.length; i++) {
        html = html + 
        `<div onclick="agregarAlCarro(${productos[i].id});">
        <p>id:${productos[i].id}</p>
        <p>nombre:${productos[i].nombre}</p>
        <p>precio:${productos[i].precio}</p>
        <img  src="${productos[i].img}"/>
        <button>${productos[i].boton}</button>
        
       
        
        
        
        
        </div>`
    }
    document.getElementById("div-productos").innerHTML= html;

}

function renderCarrito() {
    let html = "";
    for ( let i = 0; i <carrito.length; i++) {
        html = html + 
        `<div onclick="agregarAlCarro(${carrito[i].id});">
        <p>id:${carrito[i].id}</p>
        <p>nombre:${carrito[i].nombre}</p>
        <p>precio:${carrito[i].precio}</p>
        <img  src="${carrito[i].img}"/>
        
        
        </div>`
    }
    document.getElementById("div-carrito").innerHTML= html;

}

function agregarAlCarro(id){
    const encontrarProducto = productos.find(item => item.id == id)
    carrito.push (encontrarProducto);
    console.log(carrito);
    renderCarrito();


    const total = carrito.reduce((acc, carrito) => acc + carrito.precio, 0)
    document.getElementById("div-total").innerHTML= total;
// console.log (`el total a pagar por su compra es: ${total}`);
// alert(`el total a pagar por su compra es: ${total}`);
}
renderProducto();


