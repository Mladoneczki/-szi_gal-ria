import Kartya from "./Kartya.js";

export default class Jatekter {
  #kepek = {};

  constructor(lista, kisKepSzuloelem) {
    this.#kepek = lista;
    this.#kiskepekMegjelenítése(lista, kisKepSzuloelem);
  }

  #kiskepekMegjelenítése(lista, hely) {
    lista.slice(1).forEach((aktualiElem) => {
      hely.append(`<img src="${aktualiElem.link}" alt="${aktualiElem.cim}">`);
    });
  }
}
