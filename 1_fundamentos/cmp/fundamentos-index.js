import { Diapositiva } from "../../lib/Diapositiva.js"
import "./fundamentos-contenido.js"

export class FundamentosIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1 class="leccion">1. Fundamentos</h1>
    <div class="lectura">
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
     <h2>Contenido</h2>
     <fundamentos-contenido></fundamentos-contenido>
    </div>`
 }
}

customElements.define("fundamentos-index", FundamentosIndex)