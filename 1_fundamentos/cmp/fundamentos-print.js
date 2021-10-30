import { Diapositiva } from "../../lib/Diapositiva.js"
import "./d1a-computadoras.js"
import "../b_dispositivos/cmp/d1b-dispositivos-print.js"
import "./d1c-programas.js"
import "./d1d-tipos-programas.js"
import "./d1e-hardware.js"
import "./d1f-software.js"
import "./d1g-lenguaje.js"
import "./d1h-compilador.js"
import "./d1i-interprete.js"
import "./d1j-resumen.js"
import "./fundamentos-index.js"

export class FundamentosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<fundamentos-index></fundamentos-index>
    <section>
     <d1a-computadoras></d1a-computadoras>
    </section>
    <section>
     <d1b-dispositivos-print></d1b-dispositivos-print>
    </section>
    <section>
     <d1c-programas></d1c-programas>
    </section>
    <section>
     <d1d-tipos-programas></d1d-tipos-programas>
    </section>
    <section>
     <d1e-hardware></d1e-hardware>
    </section>
    <section>
     <d1f-software></d1f-software>
    </section>
    <section>
     <d1g-lenguaje></d1g-lenguaje>
    </section>
    <section>
     <d1h-compilador></d1h-compilador>
    </section>
    <section>
     <d1i-interprete></d1i-interprete>
    </section>
    <section>
     <d1j-resumen></d1j-resumen>
    </section>`
 }
}

customElements.define("fundamentos-print", FundamentosPrint)