import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b1Consolas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Consolas de videojuegos</h1>
     <figure>
      <img alt="Consola"
        src="/1_fundamentos/img/pexels-ketut-subiyanto-4545975.jpg">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/efecto-desenfocado-dentro-reloj-de-pulsera-negro-4545952/"
          target="_blank">Foto de <strong>Ketut Subiyanto</strong> en
          <strong>Pexels</strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b1-consolas", D1b1Consolas)