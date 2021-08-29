import { Diapositiva } from "../../lib/Diapositiva.js";

export class FundamentosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p><a href="/1_fundamentos/a_algoritmo.html">Algoritmo</a></p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/b_proceso.html">Proceso de información</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_fundamentos/c_lenguaje.html">Lenguaje de programación</a>
      </p>
     </li>
     <li>
      <p><a href="/1_fundamentos/d_pseudocodigo.html">Pseudocódigo</a></p>
     </li>
     <li>
      <p><a href="/1_fundamentos/e_diagrama.html">Diagrama de flujo</a></p>
     </li>
     <li>
      <p><a href="/1_fundamentos/f_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("fundamentos-contenido", FundamentosContenido);