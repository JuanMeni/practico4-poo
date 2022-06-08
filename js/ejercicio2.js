/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
Rectángulos
*/

class Cuenta {
    constructor(propiedadTitular, propiedadSaldo){
        this.propiedadTitular = 'Alex';
        this.propiedadSaldo = 0;
    }
    ingresar(valor){
        this.propiedadSaldo = this.propiedadSaldo + valor;
    }
    extraer(valor){
        this.propiedadSaldo = this.propiedadSaldo - valor;
    }
    informar(){
        document.write(`<br>
        <ul>
        <li>Nombre: ${this.propiedadTitular}</li>
        <li>Saldo: ${this.propiedadSaldo}</li>
        </ul>`);
    }
}

let alex = new Cuenta();
alex.informar();
alex.ingresar(100);
alex.informar();
alex.extraer(50);
alex.informar();



