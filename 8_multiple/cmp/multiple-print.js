import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-multiple.js";
import "./b-codigo.js";
import "./c-resumen.js";
import "./multiple-index.js";

export class MultiplePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <multiple-index></multiple-index>
    </section>
    <section>
     <a-multiple></a-multiple>
    </section>
    <section>
     <b-codigo></b-codigo>
    </section>
    <section>
     <c-resumen></c-resumen>
    </section>`;
 }
}

customElements.define("multiple-print", MultiplePrint);