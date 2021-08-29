import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a-algoritmo.js";
import "./b-proceso.js";
import "./c-lenguaje.js";
import "./d-pseudocodigo.js";
import "./e-diagrama.js";
import "./f-resumen.js";
import "./fundamentos-index.js";

export class FundamentosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <fundamentos-index></fundamentos-index>
    </section>
    <section>
     <a-algoritmo></a-algoritmo>
    </section>
    <section>
     <b-proceso></b-proceso>
    </section>
    <section>
     <c-lenguaje></c-lenguaje>
    </section>
    <section>
     <d-pseudocodigo></d-pseudocodigo>
    </section>
    <section>
     <e-diagrama></e-diagrama>
    </section>
    <section>
     <f-resumen></f-resumen>
    </section>`;
 }
}

customElements.define("fundamentos-print", FundamentosPrint);