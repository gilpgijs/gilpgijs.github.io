import { Diapositiva } from "../../../lib/Diapositiva.js"
import "./d1b-dispositivos-contenido.js"

export class D1bDispositivosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>B. Tipos de computadoras</h1>
    <div class="lectura">
     <p class="noPrint">
      <a href="print.html" target="_blank">Versión para Imprimir.</a>
      <d1b-dispositivos-contenido></d1b-dispositivos-contenido>
     </p>
    </div>`
 }
}

customElements.define("d1b-dispositivos-index", D1bDispositivosIndex)