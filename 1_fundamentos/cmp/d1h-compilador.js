import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1hCompilador extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Compilador</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La <em>Real Academia Española</em> nos dá las siguientes definiciones:
       </p>
       <dl>
        <dt><dfn>compilar</dfn></dt>
        <dd>
         <blockquote>
          Convertir un programa en lenguaje máquina a partir de otro programa de
          computadora escrito en otro lenguaje.
         </blockquote>
        </dd>
        <dt><dfn>compilador</dfn></dt>
        <dd>
         <blockquote>
          Programa que compila.
         </blockquote>
        </dd>
       </dl>
      </li>
      <li>
       <p>
        Un compilador toma como entrada el código de un lenguaje de programación y
        genera el código para una combinación de lenguaje de máquina y sistema
        operativo precisos.
       </p>
       <figure>
        <img src="/1_fundamentos/img/compilador.svg"
          alt="Funcionamiento de un compilador">
        <figcaption>Funcionamiento de un compilador</figcaption>
       </figure>
      </li>
      <li>
       <p>Algunos lenguajes de programación que se compilan son:</p>
       <ul>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
       </ul>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1h-compilador", D1hCompilador);