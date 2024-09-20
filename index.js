import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";
import { kepLista } from "./képek.js";

const foKepHely = $(".fokep");
const kisKepekHelye = $(".kiskepek");
new Kartya(kepLista,foKepHely)
new Jatekter(kepLista,kisKepekHelye);
