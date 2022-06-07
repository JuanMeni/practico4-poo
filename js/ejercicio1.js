// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


let auto = {
  color: "Azul",
  marca: "Ford",
  modelo: "Raptor",
  motor: "",
  estado: () => {
    if (confirm("Desea encender el auto?") == true) {
      auto.motor = `Encendido`;
    } else {
      auto.motor = `Apagado`;
    }
  },
};

auto.estado();

let claves = Object.keys(auto);

for (let indice = 0; indice < 4; indice++) {
  document.write(`<br>${claves[indice]}: ${auto[claves[indice]]}`);
}
