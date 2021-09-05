/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import "../1_fundamentos/cmp/fundamentos-contenido.js"
import "../2_conceptos/cmp/conceptos-contenido.js"
import "../3_variables/cmp/variables-contenido.js"
import "../4_comentarios/cmp/comentarios-contenido.js"
import "../5_bloques/cmp/bloques-contenido.js"
import "../6_if/cmp/if-contenido.js"
import "../7_if_else/cmp/if-else-contenido.js"
import "../8_multiple/cmp/multiple-contenido.js"
import "../9_melse/cmp/multiple-else-contenido.js"
import "../10_textos/cmp/textos-contenido.js"
import "../11_logicos/cmp/logicos-contenido.js"
import "../12_do_while/cmp/do-while-contenido.js"
import "../13_numeros/cmp/numeros-contenido.js"
import "../14_mas_numeros/cmp/mas-numeros-contenido.js"
import "../15_while/cmp/while-contenido.js"
import "../16_for/cmp/for-contenido.js"

export class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
   <h2>Contenido</h2>
    <ul>
     <li><p><a href="/index.html">Inicio</a></p></li>
     <li>
      <h3>Lecciones</h3>
      <ol>
       <li>
        <details>
         <summary>
          <h4><a href="/1_fundamentos/index.html">Fundamentos</a></h4>
         </summary>
         <fundamentos-contenido></fundamentos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/2_conceptos/index.html">Conceptos básicos</a></h3>
         </summary>
         <conceptos-contenido></conceptos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/3_variables/index.html">Variables</a></h3>
         </summary>
         <variables-contenido></variables-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/4_comentarios/index.html">Comentarios</a></h3>
         </summary>
         <comentarios-contenido></comentarios-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/5_bloques/index.html">Bloques</a></h3>
         </summary>
         <bloques-contenido></bloques-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/6_if/index.html">La estructura de control
            <strong>if</strong></a>
          </h3>
         </summary>
         <if-contenido></if-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/7_if_else/index.html">La estructura de control
            <strong>if-else</strong></a>
          </h3>
         </summary>
         <if-else-contenido></if-else-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/8_multiple/index.html">Condicional múltiple</a></h3>
         </summary>
         <multiple-contenido></multiple-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/9_melse/index.html">Condicional múltiple con
            <strong>else</strong></a>
          </h3>
         </summary>
         <multiple-else-contenido></multiple-else-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/10_textos/index.html">Más textos</a></h3>
         </summary>
         <textos-contenido></textos-contenido>
         </details>
         </li>
         <li>
         <details>
         <summary>
         <h3><a href="/11_logicos/index.html">Operadores lógicos</a></h3>
         </summary>
         <logicos-contenido></logicos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/12_do_while/index.html">La estructura de control
            <strong>do-while</strong></a>
          </h3>
         </summary>
         <do-while-contenido></do-while-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/13_numeros/index.html">Números</a></h3>
         </summary>
         <numeros-contenido></numeros-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3><a href="/14_mas_numeros/index.html">Más números</a></h3>
         </summary>
         <mas-numeros-contenido></mas-numeros-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/15_while/index.html">La estructura de control
            <strong>while</strong></a>
          </h3>
         </summary>
         <while-contenido></while-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h3>
           <a href="/16_for/index.html">La estructura de control
            <strong>for</strong></a>
          </h3>
         </summary>
         <for-contenido></for-contenido>
        </details>
       </li>
        <li>
          <details>
            <summary>
              <h3>switch</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/17_switch/1_switch.html">switch</a></p>
              </li>
              <li>
                <p>
                  <a href="/17_switch/2_pres_switch_c.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un
                    caso</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/17_switch/3_pres_switch_c_v.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un caso
                    con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/17_switch/4_pres_switch_c_v2.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en otro caso
                  con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/17_switch/5_pres_switch_c_s_b.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en un caso
                  sin <strong>break</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/17_switch/6_pres_switch_c_n.html">Prueba de
                  escritorio cuando <strong>switch</strong> no cumple ningún
                  caso</a>
              </p>
              </li>
              <li>
                <p>
                  <a href="/17_switch/7_switch_default.html">switch-default</a>
                </p>
              </li>
              <li>
                <p>
                <a href="/17_switch/8_pres_switch_default.html">Prueba de
                  escritorio cuando <strong>switch-default</strong> no cumple
                  ningún caso</a>
                </p>
              </li>
              <li><p><a href="/17_switch/9_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
      </ol>
     </li>
    </ul>
    </nav>`;
 }
}

customElements.define("mi-nav", MiNav);