import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1gLenguaje extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Lenguaje de programación</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La <em>Real Academia Española</em> nos dá las siguientes definiciones:
       </p>
       <dl>
        <dt><dfn>lenguaje de programación</dfn></dt>
        <dd>
         <blockquote>
          Conjunto de signos y reglas que permite la comunicación con una computadora.
         </blockquote>
        </dd>
        <dt><dfn>lenguaje de máquina</dfn></dt>
        <dd>
         <blockquote>
          Conjunto de instrucciones codificadas que una computadora interpreta y
          ejecuta directamente.
         </blockquote>
        </dd>
        <dt><dfn>programa</dfn></dt>
        <dt><dfn>código</dfn></dt>
        <dd>
         <blockquote>
          
         </blockquote>
        </dd>
       </dl>
      </li>
      <li>
       <p>Cada arquitectura de hardware tiene un código de máquina diferente.</p>
      </li>
      <li>
       <p>
        Los programas normalmente se construyen usando uno o más lenguajes de
        programación.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1g-lenguaje", D1gLenguaje);