import {Mamifero} from "./mamifero";

export  class Carnivoro extends Mamifero{
    public comer(): void {
        console.log("comer carne");
    }
}