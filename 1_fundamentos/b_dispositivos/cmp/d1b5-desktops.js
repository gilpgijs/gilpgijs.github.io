import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b5Desktops extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Computadoras de escritorio</h1>
     <figure>
      <img alt="Computadora de escritorio"
        src="/1_fundamentos/img/pexels-bich-tran-1714341.jpg">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/encendido-del-monitor-el-teclado-y-los-elementos-del-escritorio-1714341/"
          target="_blank">Foto de <strong>Bich Tran</strong> en
         <strong>Pexels/<strong></strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b5-desktops", D1b5Desktops)