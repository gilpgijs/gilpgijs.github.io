import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-js.js";
import "./b-textos.js";
import "./c-string.js";
import "./conceptos-index.js";
import "./d-write.js";
import "./e-orden.js";
import "./f-resumen.js";

export class ConceptosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <conceptos-index></conceptos-index>
    </section>
    <section>
     <a-js></a-js>
    </section>
    <section>
     <b-textos></b-textos>
    </section>
    <section>
     <c-string></c-string>
    </section>
    <section>
     <d-write></d-write>
    </section>
    <section>
     <e-orden></e-orden>
    </section>
    <section>
     <f-resumen></f-resumen>
    </section>`;
 }
}

customElements.define("conceptos-print", ConceptosPrint);