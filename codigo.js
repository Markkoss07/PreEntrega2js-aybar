
const persona = {
    nombre: prompt("Ingrese su nombre"),
    direccion: prompt("Ingrese su calle y altura"),
    localidad: prompt("Ingrese su localidad"),
};

console.log(persona);
alert(`Bienvenido ${persona.nombre} a nuestra Heladeria`);

const productos = [
    {nombre: "Dos Kilos", precio: 5000},
    {nombre: "Un kilo", precio: 2900},
    {nombre: "Medio kilo", precio: 1450},
    {nombre: "Un cuarto", precio: 1000},
    {nombre: "Cucurucho", precio: 800},
    {nombre: "Tacita", precio: 400},
];

let carrito = [];
let eleccion = prompt("¿Desea comprar? Si o No");

while (eleccion != "si" && eleccion != "no"){
    alert("Ingresa si o no");
    eleccion = prompt("¿Desea comprar? Si o No");
}

if(eleccion === "si"){
    let misProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert(misProductos.join(" - "));
}else if(eleccion != "si"){
    alert("Gracias por visitarnos");
}

function comprar(){
    while (eleccion != "no"){
        let producto = prompt("Agregue un producto a su carrito");
        let precio = 0;

        if (producto == "dos kilos" || producto == "un kilo" || producto == "medio kilo" || producto == "un cuarto" || producto == "cucurucho" || producto == "tacita"){
            switch (producto) {
                case "dos kilos":
                    precio = 5000; 
                    break;
                case "un kilo":
                    precio = 2900; 
                    break; 
                case "medio kilo":
                    precio = 1450; 
                    break; 
                case "un cuarto":
                    precio = 1000; 
                    break;
                case "cucurucho":
                    precio = 800; 
                    break; 
                case "tacita":
                    precio = 400; 
                    break;
                default:
                    break;               
            }
        let cantidad = parseInt(prompt("Cuantas unidades quiere llevar"));

        carrito.push({producto, cantidad, precio});
        console.log(carrito);
        }else {
           alert("No tenemos lo que solicita");
        } 
        
        eleccion = prompt("¿Desea seguir comprando?");

       while (eleccion === "no"){
        alert(`Gracias por su compra ${persona.nombre}, regrese pronto!!`);
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.cantidad}, Total a pagar por producto $${carritoFinal.cantidad * carritoFinal.precio}`);
        })
        break;
       }
    }
}
comprar();

const total = carrito.reduce((accu, el) => accu + el.precio * el.cantidad, 0);
alert(`El total a pagar por su compra es de: $${total}`);
alert(`Su pedido lo estamos preparando para enviar a ${persona.direccion}, ${persona.localidad}.`);