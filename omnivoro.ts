import {Mamifero} from "./mamifero";

export  class Omnivoro extends Mamifero{
    public comer(): void {
        console.log("comer carne/plantas");
    }
}