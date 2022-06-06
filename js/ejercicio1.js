// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


let auto = {
  color: "Azul",
  marca: "Ford",
  modelo: "Raptor",
  estadoMotor: "",
  motor: () => {
    if (confirm("Desea encender el auto?") != true) {
      auto.estadoMotor = `Apagado`;
    } else {
      auto.estadoMotor = `Encendido`;
    }
  },
};

auto.motor();

let claves = Object.keys(auto);

for (let indice = 0; indice < 4; indice++) {
  document.write(`<br>${claves[indice]}: ${auto[claves[indice]]}`);
}
