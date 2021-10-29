import "../js/config.js"
import { Diapositiva } from "../lib/Diapositiva.js"
import "../lib/instrucciones-nav.js"

export class GilPGIJSIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1 class="sitio"></h1>
    <div class="lectura">
     <p class="autor">por Gilberto Pacheco Gallegos</p>
     <p class="noPrint">
      <a href="print.html" target="_blank">Versión para Imprimir.</a>
     </p>
     <p>Contenido introductorio sobre JavaScript</p>
     <p>
      Una vez concluidos estos temas, puedes continuar con
      <a href="https://gilpgpoojs.github.io"
        target="_blank">https://gilpgpoojs.github.io</a>
      para aprender sobre Programación Orientada a Objetos en JavaScript.
     </p>
     <p>
      Los temas de HTML, CSS y animaciones se han movido al sitio
      <a href="https://gilpgiw.github.io"
        target="_blank">https://gilpgiw.github.io</a>.
     </p>
     <instrucciones-nav></instrucciones-nav>
     <section>
      <h1>Contenido</h1>
      <mi-nav></mi-nav>
     </section>
    </div>`
 }
}

customElements.define("gilpgijs-index", GilPGIJSIndex)