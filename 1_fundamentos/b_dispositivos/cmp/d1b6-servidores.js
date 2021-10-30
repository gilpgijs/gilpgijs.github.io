import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1b6Servidores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>Servidores</h1>
     <figure>
      <img src="/1_fundamentos/img/pexels-manuel-geissinger-325229.jpg" alt="Computadoras">
      <figcaption>
       <small>
        <a href="https://www.pexels.com/es-es/foto/interior-del-edificio-de-oficinas-325229/"
          target="_blank">Foto de <strong>Manuel Geissinger</strong> en
         <strong>Pexels</strong></a>
       </small>
      </figcaption>
     </figure>
    </div>`
 }
}

customElements.define("d1b6-servidores", D1b6Servidores)