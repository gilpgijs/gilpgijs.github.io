import { Diapositiva } from "../../../lib/Diapositiva.js"
import "./d1b-dispositivos-index.js"
import "./d1b1-consolas.js"
import "./d1b2-celulares.js"
import "./d1b3-tablets.js"
import "./d1b4-laptops.js"
import "./d1b5-desktops.js"
import "./d1b6-servidores.js"

export class D1bDispositivosPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<d1b-dispositivos-index></d1b-dispositivos-index>
    <section>
     <d1b1-consolas></d1b1-consolas>
    </section>
    <section>
     <d1b2-celulares></d1b2-celulares>
    </section>
    <section>
     <d1b3-tablets></d1b3-tablets>
    </section>
    <section>
     <d1b4-laptops></d1b4-laptops>
    </section>
    <section>
     <d1b5-desktops></d1b5-desktops>
    </section>
    <section>
     <d1b6-servidores></d1b6-servidores>
    </section>`
 }
}

customElements.define("d1b-dispositivos-print", D1bDispositivosPrint)