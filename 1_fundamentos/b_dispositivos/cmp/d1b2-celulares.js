import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b2Celulares extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Teléfonos celulares</h1>
     <figure>
      <img alt="Teléfono celular"
        src="/1_fundamentos/img/pexels-andrea-piacquadio-3781725.jpg">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/fotografia-en-primer-plano-de-una-mujer-rubia-3781725/"
          target="_blank">Foto de <strong>Andrea Piacquadio</strong> en
          <strong>Pexels</strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b2-celulares", D1b2Celulares)