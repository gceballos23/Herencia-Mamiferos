export class Mamifero{
    protected glandulasMamarias : number;
    protected pelo: boolean;
    protected peso:number;

    constructor(pGlandulasMamarias : number,pPelo : boolean, pPeso : number){
        this.glandulasMamarias = pGlandulasMamarias;
        this.pelo = pPelo;
        this.peso = pPeso;
    }

    public getGlandulasMamarias(): number{
        return this.glandulasMamarias;
    }
    
    public setGlandulasMamarias(pCantidad : number):void{
        this.glandulasMamarias = pCantidad;
    }

    public getPelo(): Boolean{
        return this.pelo;
    }
    
    public setPelo(pPelo : boolean):void{
        this.pelo = pPelo;
    }

    public getPeso(): number{
        return this.peso;
    }
    
    public setPeso(pPeso : number):void{
        this.peso = pPeso;
    }

    public comer():void{
        console.log("comer");
    }


}
