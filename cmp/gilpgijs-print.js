import "../1_fundamentos/cmp/fundamentos-print.js";
import "../2_conceptos/cmp/conceptos-print.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./gilpgijs-index.js";

export class GilPGIJSPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <gilpgijs-index></gilpgijs-index>
     <mi-footer></mi-footer>
    </section>
    <section>
    <h1>1. Fundamentos</h1>
    <fundamentos-print></fundamentos-print>
    <mi-footer></mi-footer>
    </section>
    <section>
    <h1>2. Conceptos básicos</h1>
    <conceptos-print></conceptos-print>
    <mi-footer></mi-footer>
    </section>
    <section>
     <c-lenguaje-1></c-lenguaje-1>
    </section>
    <section>
     <d-pseudocodigo-1></d-pseudocodigo-1>
    </section>
    <section>
     <e-diagrama-1></e-diagrama-1>
    </section>
    <section>
     <f-resumen-1></f-resumen-1>
    </section>`;
 }
}

customElements.define("gilpgijs-print", GilPGIJSPrint);