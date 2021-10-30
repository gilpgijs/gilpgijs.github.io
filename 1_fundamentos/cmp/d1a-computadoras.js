import { Diapositiva } from "../../lib/Diapositiva.js"

export class D1aComputadoras extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>A. Computadoras</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Según la <em>Real Academia Española</em>, una
        <dfn>computadora electrónica</dfn>
        es una
        <q>máquina electrónica que, mediante determinados programas, permite
         almacenar y tratar información, y resolver problemas de diversa
         índole</q>.
       </p>
       <figure>
        <img alt="Computadoras"
          src="/1_fundamentos/img/pexels-teona-swift-6912819.jpg">
        <figcaption>
         Computadoras en nuestra vida
         (<small><a href="https://www.pexels.com/es-es/foto/persona-cafe-taza-mano-6912819/"
            target="_blank">Foto de <strong>Teona Swift</strong> en
            <strong>Pexels</strong></a>)
         </small>
        </figcaption>
       </figure>
      </li>
     </ul>
    </div>`
 }
}

customElements.define("d1a-computadoras", D1aComputadoras)