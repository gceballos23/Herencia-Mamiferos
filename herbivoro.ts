import {Mamifero} from "./mamifero";

export  class Herbivoro extends Mamifero{
    public comer(): void {
        console.log("comer plantas/frutos");
    }
}