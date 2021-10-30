import { Diapositiva } from "../../../lib/Diapositiva.js"

export class D1bDispositivosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<ul>
     <li>
      <p>
       <a href="/1_fundamentos/b_dispositivos/1_consolas.html">Consolas de videojuegos</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_dispositivos/2_celulares.html">Teléfonos celulares</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_dispositivos/3_tablets.html">Tablets</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_dispositivos/4_laptops.html">Laptops</a>
      </p>
     </li>
     <li>
      <p><a href="/1_fundamentos/b_dispositivos/5_desktops.html">Computadoras de escritorio</a></p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_dispositivos/6_servidores.html">Servidores</a>
      </p>
     </li>
    </ul>`
 }
}

customElements.define("d1b-dispositivos-contenido", D1bDispositivosContenido)