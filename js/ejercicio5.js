/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona{
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento){
     this.nombre = nombre;
     this.edad = edad;
     this.DNI = DNI;   
     this.sexo = sexo;
     this.peso = peso;
     this.altura = altura;
     this.anioNacimiento = anioNacimiento
     this.generacion = ""
    }
   
    mostrarGeneracion(){
        if(this.anioNacimiento>=1930 && this.anioNacimiento<=1948){
            this.generacion = 'Silent Generation y su caracteristica principal es la austeridad'
        }else if(this.anioNacimiento>=1949 && this.anioNacimiento<=1968){
            this.generacion = 'Baby Boom y su caracteristica principal es la ambición'
        }
        else if(this.anioNacimiento>=1969 && this.anioNacimiento<=1980){
            this.generacion = 'Generacion X  y su caracteristica principal es la obsecion por el exito'
        }
        else if(this.anioNacimiento>=1981 && this.anioNacimiento<=1993){
            this.generacion = 'Generacion Y  y su caracteristica principal es la frustracion'
        }
        else{
            this.generacion = 'Generacion Z y su caracteristica principal es la irreverencia'
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
          document.write('Es mayor de edad.');  
        }else{
           document.write('Es menor de edad.')
        }
    }
     mostrarDatos(){
        document.write(`<br><hr>
         <ul>
         <li>Nombre: ${this.nombre}</li>
         <li>Edad: ${this.edad} años</li>
         <li>DNI: ${this.DNI}</li>
         <li>Sexo: ${this.sexo}</li>
         <li>Peso: ${this.peso} kg</li>
         <li>Altura: ${this.altura} cm</li>
         <li>Año de nacimiento: ${this.anioNacimiento}</li>
         <li>Generación: ${this.generacion}</li>
         </ul>`)
    }
    generarDni(){
        let nuevoDni = Math.floor(Math.random()* 99999999)+1;
        return nuevoDni;
    }
}

let persona1 = new Persona('Andressa', 30, 37105385, 'M', 78, 185, 1992);
persona1.mostrarGeneracion();
persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.generarDni();
document.write(`<br>Su nuevo DNI sera ${persona1.generarDni()}`)

let persona2 = new Persona('Juan', 29, 37105385, 'H', 102, 185, 1993);
persona2.mostrarGeneracion();
persona2.mostrarDatos();
persona2.esMayorDeEdad();
persona2.generarDni();
document.write(`<br>Su nuevo DNI sera ${persona2.generarDni()}`)

let persona3 = new Persona('Pedro', 11, 50824782, 'H', 40, 174, 2011);
persona3.mostrarGeneracion();
persona3.mostrarDatos();
persona3.esMayorDeEdad();
persona3.generarDni();
document.write(`<br>Su nuevo DNI sera ${persona3.generarDni()}`)



