/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import "../10_textos/cmp/textos-contenido.js"
import "../11_logicos/cmp/logicos-contenido.js"
import "../12_do_while/cmp/do-while-contenido.js"
import "../13_numeros/cmp/numeros-contenido.js"
import "../14_mas_numeros/cmp/mas-numeros-contenido.js"
import "../15_while/cmp/while-contenido.js"
import "../16_for/cmp/for-contenido.js"
import "../17_switch/cmp/switch-contenido.js"
import {
 fundamentosContenido
} from "../1_fundamentos/js/fundamentosContenido.js"
import { conceptosContenido } from "../2_conceptos/js/conceptosContenido.js"
import "../3_variables/cmp/variables-contenido.js"
import "../4_comentarios/cmp/comentarios-contenido.js"
import "../5_bloques/cmp/bloques-contenido.js"
import "../6_if/cmp/if-contenido.js"
import "../7_if_else/cmp/if-else-contenido.js"
import "../8_multiple/cmp/multiple-contenido.js"
import "../9_melse/cmp/multiple-else-contenido.js"

export function miNav() {
 return (/* html */
  `<ul class="miNav">
    <li><p><a href="/index.html">Introducción a JavaScript</a></p></li>
    <li>
     <h3>Lecciones</h3>
     <ol>
      <li>
       <details>
        <summary>
         <h4><a href="/1_fundamentos/index.html">Fundamentos</a></h4>
        </summary>
        ${fundamentosContenido()}
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/2_conceptos/index.html">Conceptos básicos</a></h4>
        </summary>
        ${conceptosContenido()}
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/3_variables/index.html">Variables</a></h4>
        </summary>
        <variables-contenido></variables-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/4_comentarios/index.html">Comentarios</a></h4>
        </summary>
        <comentarios-contenido></comentarios-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/5_bloques/index.html">Bloques</a></h4>
        </summary>
        <bloques-contenido></bloques-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/6_if/index.html">La estructura de control
           <strong>if</strong></a>
          </h4>
        </summary>
        <if-contenido></if-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/7_if_else/index.html">La estructura de control
           <strong>if-else</strong></a>
         </h4>
        </summary>
        <if-else-contenido></if-else-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/8_multiple/index.html">Condicional múltiple</a></h4>
        </summary>
        <multiple-contenido></multiple-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/9_melse/index.html">Condicional múltiple con
           <strong>else</strong></a>
         </h4>
        </summary>
        <multiple-else-contenido></multiple-else-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/10_textos/index.html">Más textos</a></h4>
        </summary>
        <textos-contenido></textos-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/11_logicos/index.html">Operadores lógicos</a></h4>
        </summary>
        <logicos-contenido></logicos-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/12_do_while/index.html">La estructura de control
           <strong>do-while</strong></a>
         </h4>
        </summary>
        <do-while-contenido></do-while-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4><a href="/13_numeros/index.html">Números</a></h4>
        </summary>
        <numeros-contenido></numeros-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/14_mas_numeros/index.html">Más números</a>
         </h4>
        </summary>
        <mas-numeros-contenido></mas-numeros-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/15_while/index.html">La estructura de control
           <strong>while</strong></a>
         </h4>
        </summary>
        <while-contenido></while-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/16_for/index.html">La estructura de control
           <strong>for</strong></a>
         </h4>
        </summary>
        <for-contenido></for-contenido>
       </details>
      </li>
      <li>
       <details>
        <summary>
         <h4>
          <a href="/17_switch/index.html">La estructura de control
           <strong>switch</strong></a>
         </h4>
        </summary>
        <switch-contenido></switch-contenido>
       </details>
      </li>
     </ol>
    </li>
   </ul>`)
}