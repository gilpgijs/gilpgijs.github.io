import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-multiple-else.js";
import "./b-codigo.js";
import "./c-resumen.js";
import "./multiple-else-index.js";

export class MultipleElsePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <multiple-else-index></multiple-else-index>
    </section>
    <section>
     <a-multiple-else></a-multiple-else>
    </section>
    <section>
     <b-codigo></b-codigo>
    </section>
    <section>
     <c-resumen></c-resumen>
    </section>`;
 }
}

customElements.define("multiple-else-print", MultipleElsePrint);