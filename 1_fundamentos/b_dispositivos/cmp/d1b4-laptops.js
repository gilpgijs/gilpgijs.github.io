import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b4Laptops extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Laptops</h1>
     <figure>
      <img alt="Laptop"
        src="/1_fundamentos/img/pexels-tima-miroshnichenko-6021573.jpg">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/persona-cafe-taza-mano-6912819/"
          target="_blank">Foto de <strong>Tima Miroshnichenko</strong> en
         <strong>Pexels</strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b4-laptops", D1b4Laptops)