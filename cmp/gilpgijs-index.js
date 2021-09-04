import { Diapositiva } from "../lib/Diapositiva.js";

export class GilPGIJSIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
   <h2>por Gilberto Paheco Gallegos</h2>
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
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("gilpgijs-index", GilPGIJSIndex);