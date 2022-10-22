import { Mamifero } from "./mamifero";

export class Omnivoro extends Mamifero {
    constructor(pGlandulasMamarias: number, pPelo: boolean, pPeso: number) {
        super(pGlandulasMamarias, pPelo, pPeso);
    }

    public comer(): void {
        console.log("comer carne/plantas");
    }
}