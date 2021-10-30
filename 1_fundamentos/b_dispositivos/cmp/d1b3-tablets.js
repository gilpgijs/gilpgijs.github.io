import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b3Tablets extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Tablets</h1>
     <figure>
      <img alt="Tablet"
        src="/1_fundamentos/img/pexels-andrea-piacquadio-3776817.jpg">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/ordenador-portatil-navidad-papa-noel-ropa-6021573/"
          target="_blank">Foto de <strong>Andrea Piacquadio</strong> en
         <strong>Pexels</strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b3-tablets", D1b3Tablets)