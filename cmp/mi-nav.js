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
              <h3>do-while</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/12_do_while/1_do_while.html">do-while</a></p>
              </li>
              <li>
                <p>
                  <a href="/12_do_while/2_pres_d14_while.html">Prueba de
                    escritorio con <strong>do-while</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Programa con <strong>do-while</strong></h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/12_do_while/3_d14_while_prog/index.html">Programa
                          con <strong>do-while</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/12_do_while/3_d14_while_prog/2_problema.html">Definición
                          del problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/12_do_while/3_d14_while_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/12_do_while/3_d14_while_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/12_do_while/3_d14_while_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li><p><a href="/12_do_while/4_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Más números</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/13_numeros/1_recta.html">Recta numérica</a></p>
              </li>
              <li>
                <p>
                  <a href="/13_numeros/2_ops_num.html">Operadores numéricos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/13_numeros/3_asignacion.html">Operadores con
                    asignación</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/13_numeros/4_incr_y_decr.html">Incremento y
                    decremento</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/13_numeros/5_igualdad.html">Operadores de
                    igualdad</a>
                </p>
              </li>
              <li>
                <p><a href="/13_numeros/6_orden.html">Operadores de orden</a></p>
              </li>
              <li>
                <p>
                  <a href="/13_numeros/7_orden_igualdad.html">Operadores
                    combinados de orden e igualdad</a>
                </p>
              </li>
              <li>
                <p><a href="/13_numeros/8_precedencia.html">Precedencia de Operadores</a></p>
              </li>
              <li>
                <p><a href="/13_numeros/9_expresiones.html">Expresiones</a></p>
              </li>
              <li><p><a href="/13_numeros/10_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>while</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/14_while/1_while.html">while</a></p>
              </li>
              <li>
                <p>
                  <a href="/14_while/2_pres_while_asc.html">Prueba de escritorio
                    con <strong>while</strong> ascendente</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/3_pres_while_asc_2.html">Prueba de
                    escritorio con <strong>while</strong> ascendente de 2 en
                    2</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/4_pres_while_desc.html">Prueba de escritorio
                    con <strong>while</strong> descendente</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/5_pres_while_desc_2.html">Prueba de
                    escritorio con <strong>while</strong> descendente de 2 en
                    2</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/6_pres_while_no_ejec.html">Prueba de
                    escritorio con <strong>while</strong> que no se ejecuta</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/7_pres_while_desc_mal.html">Prueba de
                    escritorio con <strong>while</strong> descendente mal
                    diseñado</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/14_while/8_pres_while_asc_mal.html">Prueba de
                    escritorio con <strong>while</strong> ascendente mal
                    diseñado</a>
                </p>
              </li>
              <li><p><a href="/14_while/9_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>for</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/15_for/1_for.html">for</a></p>
              </li>
              <li>
                <p>
                  <a href="/15_for/2_pres_for.html">Prueba de escritorio con
                    <strong>for</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Programa con <strong>for</strong></h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/15_for/3_for_prog/index.html">Programa
                          con <strong>for</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/15_for/3_for_prog/2_problema.html">Definición
                          del problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/15_for/3_for_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/15_for/3_for_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/15_for/3_for_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li><p><a href="/15_for/4_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>switch</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/16_switch/1_switch.html">switch</a></p>
              </li>
              <li>
                <p>
                  <a href="/16_switch/2_pres_switch_c.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un
                    caso</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/16_switch/3_pres_switch_c_v.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un caso
                    con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/16_switch/4_pres_switch_c_v2.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en otro caso
                  con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/16_switch/5_pres_switch_c_s_b.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en un caso
                  sin <strong>break</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/16_switch/6_pres_switch_c_n.html">Prueba de
                  escritorio cuando <strong>switch</strong> no cumple ningún
                  caso</a>
              </p>
              </li>
              <li>
                <p>
                  <a href="/16_switch/7_switch_default.html">switch-default</a>
                </p>
              </li>
              <li>
                <p>
                <a href="/16_switch/8_pres_switch_default.html">Prueba de
                  escritorio cuando <strong>switch-default</strong> no cumple
                  ningún caso</a>
                </p>
              </li>
              <li><p><a href="/16_switch/9_resumen.html">Resumen</a></p></li>
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