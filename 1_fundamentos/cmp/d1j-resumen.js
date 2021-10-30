import { Diapositiva } from "../../lib/Diapositiva.js";

export class D1jResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. Resumen</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La <em>Real Academia Española</em> nos dá las siguientes definiciones:
       </p>
       <dl>
        <dt><dfn>computadora electrónica</dfn></dt>
        <dd>
         <blockquote>
          Máquina electrónica que, mediante determinados programas, permite almacenar y
          tratar información, y resolver problemas de diversa índole.
         </blockquote>
        </dd>
        <dt><dfn>hardware</dfn></dt>
        <dd>
         <blockquote>
          Conjunto de aparatos de una computadora.
         </blockquote>
        </dd>
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
          Conjunto unitario de instrucciones que permite a una computadora realizar
          funciones diversas, como el tratamiento de textos, el diseño de gráficos, la
          resolución de problemas matemáticos, el manejo de bancos de datos, etc.
         </blockquote>
        </dd>
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
        Un <dfn>intérprete</dfn> ejecuta un código de un lenguaje de
        computación sin generar externamente un archivo de compilación.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d1j-resumen", D1jResumen);