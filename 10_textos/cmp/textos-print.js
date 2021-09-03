import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-number.js";
import "./b-concatenacion.js";
import "./c-asignacion.js";
import "./d-plantillas.js";
import "./e-orden.js";
import "./f-orden-igualdad.js";
import "./g-resumen.js";
import "./textos-index.js";

export class TextosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <textos-index></textos-index>
    </section>
    <section>
     <a-number></a-number>
    </section>
    <section>
     <b-concatenacion></b-concatenacion>
    </section>
    <section>
     <c-asignacion></c-asignacion>
    </section>
    <section>
     <d-plantillas></d-plantillas>
    </section>
    <section>
     <e-orden></e-orden>
    </section>
    <section>
     <f-orden-igualdad></f-orden-igualdad>
    </section>
    <section>
     <g-resumen></g-resumen>
    </section>`;
 }
}

customElements.define("textos-print", TextosPrint);