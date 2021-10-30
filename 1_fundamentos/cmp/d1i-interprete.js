import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1iInterprete extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Intérprete</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Un <dfn>intérprete</dfn> ejecuta un código de un lenguaje de
        computación sin generar externamente un archivo de compilación.
       </p>
       <figure>
        <img src="/1_fundamentos/img/interprete.svg"
          alt="Funcionamiento de un intérprete">
        <figcaption>Funcionamiento de intérprete</figcaption>
       </figure>
      </li>
      <li>
       <p>
        Los lenguajes de programación usados normalmente en un navegador
        web, como HTML, CSS y JavaScript son interpretados.
       </p>
      </li>
      <li>
       <p>
        El lenguaje de programación Java se compila a un código de máquina
        genérica y luego es ejecutado por un intérprete de ese código.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1i-interprete", D1iInterprete);