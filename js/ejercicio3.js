/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.*/

 class Rectangulos{
     constructor(ancho, alto){
         this.ancho = ancho;
         this.alto = alto;
     }
     get mostrarPerimetro(){
         return (this.ancho * 2) + (this.alto * 2);
     }
     get mostrarArea(){
         return (this.alto)*(this.ancho);
     }
     monstrarDatos(){
         document.write(`<br>
         <ul>
         <li>Ancho: ${this.ancho}</li>
         <li>Alto: ${this.alto}</li>
         <li>Perimetro: ${this.mostrarPerimetro}</li>
         <li>Area: ${this.mostrarArea}</li>
         </ul>`)
     }
 }

 let Recangulo1 = new Rectangulos(3, 5);
 let Recangulo2 = new Rectangulos(4, 7);
 let Recangulo3 = new Rectangulos(6, 10);
 
 Recangulo1.monstrarDatos();
 Recangulo2.monstrarDatos();
 Recangulo3.monstrarDatos();