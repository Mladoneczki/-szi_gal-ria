export default class Kartya {
  #kep = {};

  constructor(lista, szuloElem) {
    this.#kep = lista;
    this.szuloElem = szuloElem;
    this.foKepMegjelenites(this.kepKivalasztas(0));
  }

  kepKivalasztas(szam) {
    return this.#kep[szam];
  }

  foKepMegjelenites(kep) {
    this.szuloElem.append(`<img src="${kep.link}" alt="${kep.leiras}">`);
  }
  ujKartyaMegjelenites(index) {
    const kep = this.kepKivalasztas(index);
    this.foKepMegjelenites(kep);
  }


    
  
}
