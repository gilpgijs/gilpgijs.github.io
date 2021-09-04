import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-do-while.js";
import "./b-codigo.js";
import "./c-resumen.js";
import "./do-while-index.js";

export class DoWhilePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <do-while-index></do-while-index>
    </section>
    <section>
     <a-do-while></a-do-while>
    </section>
    <section>
     <b-codigo></b-codigo>
    </section>
    <section>
     <c-resumen></c-resumen>
    </section>`;
 }
}

customElements.define("do-while-print", DoWhilePrint);