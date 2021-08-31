import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-if-else.js";
import "./b-codigo.js";
import "./c-resumen.js";
import "./if-else-index.js";

export class IfElsePrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <if-else-index></if-else-index>
    </section>
    <section>
     <a-if-else></a-if-else>
    </section>
    <section>
     <b-codigo></b-codigo>
    </section>
    <section>
     <c-resumen></c-resumen>
    </section>`;
 }
}

customElements.define("if-else-print", IfElsePrint);