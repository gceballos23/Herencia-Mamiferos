"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(pGlandulasMamarias, pPelo, pPeso) {
        this.glandulasMamarias = pGlandulasMamarias;
        this.pelo = pPelo;
        this.peso = pPeso;
    }
    Mamifero.prototype.getGlandulasMamarias = function () {
        return this.glandulasMamarias;
    };
    Mamifero.prototype.setGlandulasMamarias = function (pCantidad) {
        this.glandulasMamarias = pCantidad;
    };
    Mamifero.prototype.getPelo = function () {
        return this.pelo;
    };
    Mamifero.prototype.setPelo = function (pPelo) {
        this.pelo = pPelo;
    };
    Mamifero.prototype.getPeso = function () {
        return this.peso;
    };
    Mamifero.prototype.setPeso = function (pPeso) {
        this.peso = pPeso;
    };
    Mamifero.prototype.comer = function () {
        console.log("comer");
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
