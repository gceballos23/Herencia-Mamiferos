import { Mamifero } from "./mamifero";
import { Herbivoro } from "./herbivoro";
import { Carnivoro } from "./carnivoro";
import { Omnivoro } from "./omnivoro";

let ejemploMamifero = new Mamifero(4, false, 120);
let tigre = new Carnivoro(6, true, 600);
let hombre = new Omnivoro(2, true, 85);
let elefante = new Herbivoro(4, false, 2500);

console.log("Mamifero - metodo comer- Mamifero");
ejemploMamifero.comer();

console.log("Tigre - metodo comer- Tigre");
tigre.comer();

console.log("Hombre - metodo comer- Hombre");
hombre.comer()

console.log("Elefante - metodo comer- Elefante");
elefante.comer();
