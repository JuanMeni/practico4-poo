/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`<br>
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
        </ul>`)
    }
}

let colchon = new Producto(3213, 'Colchon', 2300);
let mesa = new Producto(212, 'Mesa', 43245);
let armario = new Producto(2331, 'Armario', 64000);

let items = [colchon, mesa, armario];

for(let i=0; i<items.length; i++){
    items[i].imprimeDatos();
}
