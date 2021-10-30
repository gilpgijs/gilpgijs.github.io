import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1fSoftware extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Software</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La <em>Real Academia Española</em> nos dá las siguientes definiciones:
       </p>
       <dl>
        <dt><dfn>software</dfn></dt>
        <dd>
         <blockquote>
          Conjunto de programas, instrucciones y reglas informáticas para
          ejecutar ciertas tareas en una computadora.
         </blockquote>
        </dd>
        <dt><dfn>sistema operativo</dfn></dt>
        <dd>
         <blockquote>
          Programa o conjunto de programas que realizan funciones básicas y permiten el
          desarrollo de otros programas.
         </blockquote>
        </dd>
       </dl>
      </li>
      <li>
       <p>Algunos ejemplos de sistemas operativos son:</p>
       <ul>
        <li><p>Android</p></li>
        <li><p>Windows</p></li>
        <li><p>iOS</p></li>
        <li><p>MacOS</p></li>
       </ul>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1f-software", D1fSoftware);