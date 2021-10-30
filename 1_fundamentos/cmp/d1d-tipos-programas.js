import { Diapositiva } from "../../lib/Diapositiva.js"

export class D1dTiposProgramas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<h1>D. Tipos de programas</h1>
    <div class="lectura">
     <ul>
      <li><p>Juegos</p></li>
      <li><p>Sitios web</p></li>
      <li><p>Servidores web</p></li>
      <li><p>Sistemas operativos como Android, iOS, Windows</p></li>
      <li><p>Sistemass de videoconferencia</p></li>
     </ul>
    </div>`
 }
}

customElements.define("d1d-tipos-programas", D1dTiposProgramas)