// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    color: "blanco",
    marca: "Ford",
    modelo: "Ranger",
    encendido: true,
    encenderlo:() => {
        document.write("Ingrese la llave y girarla");
    }
}

console.log(auto);

auto.encendido = false
document.write(`<br> encendido: ${auto.encendido}`);

