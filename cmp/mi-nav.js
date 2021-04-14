/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol type="A">
        <li>
          <p><a href="/index.html">Inicio</a></p>
        </li>
        <li>
          <p><a href="/b_sw.html">Software a instalar</a></p>
        </li>
        <li>
          <details>
            <summary>
              <h3>Fundamentos</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/c_fundamentos/1_proceso.html">Proceso de
                    información</a>
                </p>
              </li>
              <li>
                <p><a href="/c_fundamentos/2_algoritmo.html">Algoritmo</a></p>
              </li>
              <li>
                <p>
                  <a href="/c_fundamentos/3_diagrama.html">Diagrama de flujo</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_fundamentos/4_pseudocodigo.html">Pseudocódigo</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/c_fundamentos/5_lenguaje.html">Lenguaje de
                    programación</a>
                </p>
              </li>
              <li>
                <p><a href="/c_fundamentos/6_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Introducción a JavaScript</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/d_js/1_js.html">JavaScript</a></p>
              </li>
              <li>
                <p><a href="/d_js/2_textos.html">Textos</a></p>
              </li>
              <li>
                <p>
                  <a href="/d_js/3_string.html">El tipo
                    <strong>string</strong></a>
                </p>
              </li>
              <li>
                <p><a href="/d_js/4_console.html">console.log</a></p>
              </li>
              <li>
                <p><a href="/d_js/5_orden.html">Orden de ejecución</a></p>
              </li>
              <li>
                <details>
                  <summary>
                    <h4>Prueba de escritorio básica</h4>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/d_js/6_pres/index.html">Prueba de escritorio
                          básica</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/d_js/6_pres/1.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"p"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/d_js/6_pres/2.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"a"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/d_js/6_pres/3.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"u"</span>);</code></a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/d_js/7_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Variables</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a
                    href="/e_variables/1_identificadores.html">Identificadores</a>
                </p>
              </li>
              <li>
                <p><a href="/e_variables/2_variables.html">Variables</a></p>
              </li>
              <li>
                <details>
                  <summary>
                    <h4>Prueba de escritorio con variables</h4>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/index.html">Prueba de
                          escritorio con variables</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/1.html">Ejecuta
                          <code><span
                                  style="color: #0000ff;">let</span>&nbsp;<span
                                  style="color: #001080;">a</span>&nbsp;=&nbsp;<span
                                  style="color: #a31515;">"hola"</span>;</code>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/2.html">Ejecuta
                          <code><span
                                  style="color: #0000ff;">let</span>&nbsp;<span
                                  style="color: #001080;">b</span>&nbsp;=&nbsp;<span
                                  style="color: #a31515;">"adios"</span>;</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/3.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #001080;">a</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/4.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #001080;">b</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/5.html">Ejecuta
                          <code><span
                                    style="color: #001080;">console</span>.<span
                                    style="color: #795e26;">log</span>(<span
                                    style="color: #a31515;">"a"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/6.html">Ejecuta
                          <code><span
                                    style="color: #001080;">a</span>&nbsp;=&nbsp;<span
                                    style="color: #a31515;">"gg"</span>;</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/7.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #001080;">a</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/8.html">Ejecuta
                          <code><span
                                  style="color: #001080;">b</span>&nbsp;=&nbsp;<span
                                  style="color: #001080;">a</span>;</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/e_variables/3_pres_var/9.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #001080;">b</span>);</code></a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/e_variables/4_constantes.html">Constantes</a></p>
              </li>
              <li>
                <p>
                  <a href="/e_variables/5_duplicadas.html">Variables
                    Duplicadas</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/e_variables/6_no_encontradas.html">Variables no
                    encontradas</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/e_variables/7_bloques.html">Bloques</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/e_variables/8_pres_bloque.html">Prueba de escritorio
                    con bloques</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/e_variables/9_pres_bloque_v_d.html">Prueba de
                    escritorio con bloques y variables del mismo nombre</a>
                </p>
              </li>
              <li>
                <p><a href="/e_variables/10_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Comentarios</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/f_comentarios/1_comentarios.html">Comentarios</a></p>
              </li>
              <li>
                <p>
                  <a href="/f_comentarios/2_com_1.html">Comentarios de una línea</a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Prueba de escritorio con comentarios de una línea</h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/f_comentarios/3_pres_com_1/index.html">Prueba
                          de escritorio con comentarios de una línea</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/f_comentarios/3_pres_com_1/1.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"Hola"</span>,&nbsp;<span
                                  style="color: #a31515;">"pp"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/f_comentarios/3_pres_com_1/2.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"tt"</span>);</code></a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p>
                  <a href="/f_comentarios/4_com_1_o_mas.html">Comentarios de una
                    o más líneas</a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>
                      Prueba de escritorio con comentarios de una o más líneas
                    </h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/f_comentarios/5_pres_1_o_mas/index.html">Prueba
                          de escritorio con comentarios de una o más líneas</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/f_comentarios/5_pres_1_o_mas/1.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"Hola"</span>,&nbsp;<span
                                  style="color: #a31515;">"pp"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/f_comentarios/5_pres_1_o_mas/2.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"tt"</span>);</code></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/f_comentarios/5_pres_1_o_mas/3.html">Ejecuta
                          <code><span
                                  style="color: #001080;">console</span>.<span
                                  style="color: #795e26;">log</span>(<span
                                  style="color: #a31515;">"bb"</span>);</code></a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/f_comentarios/6_JsDoc.html">JsDoc</a></p>
              </li>
              <li>
                <p><a href="/f_comentarios/7_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>if</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/g_if/1_boolean.html">El tipo
                    <strong>boolean</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/g_if/2_txt_igualdad.html">Operadores de igualdad de
                    textos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/g_if/3_if.html">La estructura de control
                    <strong>if</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/g_if/4_if_true.html">Prueba de escritorio cuando la
                    condición de <strong>if</strong> evalúa a
                    <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/g_if/5_if_false.html">Prueba de escritorio cuando la
                    condición de <strong>if</strong> evalúa a
                    strong>false</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Programa con <strong>if</strong></h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/g_if/6_if_programa/index.html">Programa con
                          <strong>if</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/g_if/6_if_programa/2_problema.html">Definición del
                          Problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/g_if/6_if_programa/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p><a href="/g_if/6_if_programa/4_diseno.html">Diseño</a></p>
                    </li>
                    <li>
                      <p><a href="/g_if/6_if_programa/5_codigo.html">Código</a></p>
                    </li>
                    <li>
                      <p>
                        <a href="/g_if/6_if_programa/6_replit.html">Prueba los
                          escenarios en
                          <em>Replit</em></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="/g_if/6_if_programa/7_vsc.html">Prueba los
                          escenarios en <em>Visual
                            Studio Code</em></a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/g_if/7_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>if-else</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/h_if_else/1_if_else.html">La estructura de control
                    <strong>if-else</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_if_else/2_if_else_true.html">Prueba de escritorio
                    cuando la condición de <strong>if-else</strong> evalúa a
                    <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/h_if_else/3_if_else_false.html">Prueba de escritorio
                    cuando la condición de <strong>if-else</strong> evalúa a
                    <strong>false</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Programa con <strong>if-else</strong></h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/h_if_else/4_if_else_programa/index.html">Programa
                          con <strong>if-else</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/h_if_else/4_if_else_programa/2_problema.html">Definición
                          del Problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/h_if_else/4_if_else_programa/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/h_if_else/4_if_else_programa/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/h_if_else/4_if_else_programa/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/h_if_else/5_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Condicional múltiple</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/i_multiple/1_multiple.html">Condicional Múltiple</a></p>
              </li>
              <li>
                <p>
                  <a href="/i_multiple/2_pres_m_1_true.html">Prueba de escritorio cuando
                    la primera condición de una condicional múltiple evalúa a
                    <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/i_multiple/3_pres_m_2_true.html">Prueba de escritorio cuando
                    es la segunda condición de una condicional múltiple la que
                    evalúa a <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/i_multiple/4_pres_m_false.html">Prueba de escritorio cuando
                    todas las condiciones de una condicional múltiple evalúan a
                    <strong>false</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>Programa de condicional múltiple</h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/i_multiple/5_m_prog/index.html">Programa de
                          condicional múltiple</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/i_multiple/5_m_prog/2_problema.html">Definición
                          del Problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/i_multiple/5_m_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/i_multiple/5_m_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/i_multiple/5_m_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/i_multiple/6_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Condicional múltiple con <strong>else</strong></h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/j_melse/1_melse.html">Condicional múltiple con
                  <strong>else</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_melse/2_pres_melse_1_true.html">Prueba de
                    escritorio cuando la primera condición de una condicional
                    múltiple con <strong>else</strong> evalúa a
                    <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_melse/3_pres_melse_2_true.html">Prueba de
                    escritorio cuando es la segunda condición de una condicional
                    múltiple con <strong>else</strong> la que evalúa a
                    <strong>true</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/j_melse/4_pres_melse_false.html">Prueba de
                    escritorio cuando todas las condiciones de una condicional
                    múltiple con <strong>else</strong> evalúan a
                    <strong>false</strong></a>
                </p>
              </li>
              <li>
                <details>
                  <summary>
                    <h3>
                      Programa de Condicional Múltiple con <strong>else</strong>
                    </h3>
                  </summary>
                  <ol start="0">
                    <li>
                      <p>
                        <a href="/j_melse/5_melse_prog/index.html">Programa de
                          condicional múltiple con <strong>else</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/j_melse/5_melse_prog/2_problema.html">Definición
                          del problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/j_melse/5_melse_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/j_melse/5_melse_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/j_melse/5_melse_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li>
                <p><a href="/j_melse/6_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Más textos</h3>
            </summary>
            <ol>
              <li>
                <p>
                  <a href="/k_textos/1_number.html">El tipo
                    <strong>number</strong></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/k_textos/2_concatenacion.html">Operador de
                    concatenación <em>a</em> <strong>+</strong> <em>b</em></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/k_textos/3_asignacion.html">Operador de
                    concatenación con asignación
                    <em>a</em> <strong>+=</strong> <em>x</em></a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/k_textos/4_plantillas.html">Plantillas de texto</a>
                </p>
              </li>
              <li>
                <p><a href="/k_textos/5_orden.html">Operadores de orden</a></p>
              </li>
              <li>
                <p>
                  <a href="/k_textos/6_orden_igualdad.html">Operadores
                    combinados de orden e igualdad</a>
                </p>
              </li>
              <li>
                <p><a href="/k_textos/7_resumen.html">Resumen</a></p>
              </li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Operadores lógicos</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/l_logicos/1_op_y.html">Operador lógico Y</a></p>
              </li>
              <li>
                <p><a href="/l_logicos/2_op_o.html">Operador lógico O</a></p>
              </li>
              <li>
                <p><a href="/l_logicos/3_op_no.html">Operador lógico NO</a></p>
              </li>
              <li>
                <p>
                  <a href="/l_logicos/4_op_ternario.html">Operador lógico
                    ternario</a>
                </p>
              </li>
              <li><p><a href="/l_logicos/5_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>do-while</h3>
            </summary>
            <ol>
              <li>
                <p><a href="/m_do_while/1_do_while.html">do-while</a></p>
              </li>
              <li>
                <p>
                  <a href="/m_do_while/2_pres_do_while.html">Prueba de
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
                        <a href="/m_do_while/3_do_while_prog/index.html">Programa
                          con <strong>do-while</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/m_do_while/3_do_while_prog/2_problema.html">Definición
                          del problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/m_do_while/3_do_while_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/m_do_while/3_do_while_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/m_do_while/3_do_while_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li><p><a href="/m_do_while/4_resumen.html">Resumen</a></p></li>
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
                <p><a href="/n_numeros/1_recta.html">Recta numérica</a></p>
              </li>
              <li>
                <p>
                  <a href="/n_numeros/2_ops_num.html">Operadores numéricos</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/n_numeros/3_asignacion.html">Operadores con
                    asignación</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/n_numeros/4_incr_y_decr.html">Incremento y
                    decremento</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/n_numeros/5_igualdad.html">Operadores de
                    igualdad</a>
                </p>
              </li>
              <li>
                <p><a href="/n_numeros/6_orden.html">Operadores de orden</a></p>
              </li>
              <li>
                <p>
                  <a href="/n_numeros/7_orden_igualdad.html">Operadores
                    combinados de orden e igualdad</a>
                </p>
              </li>
              <li>
                <p><a href="/n_numeros/8_precedencia.html">Precedencia de Operadores</a></p>
              </li>
              <li>
                <p><a href="/n_numeros/9_expresiones.html">Expresiones</a></p>
              </li>
              <li><p><a href="/n_numeros/10_resumen.html">Resumen</a></p></li>
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
                <p><a href="/o_while/1_while.html">while</a></p>
              </li>
              <li>
                <p>
                  <a href="/o_while/2_pres_while_asc.html">Prueba de escritorio
                    con <strong>while</strong> ascendente</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/3_pres_while_asc_2.html">Prueba de
                    escritorio con <strong>while</strong> ascendente de 2 en
                    2</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/4_pres_while_desc.html">Prueba de escritorio
                    con <strong>while</strong> descendente</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/5_pres_while_desc_2.html">Prueba de
                    escritorio con <strong>while</strong> descendente de 2 en
                    2</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/6_pres_while_no_ejec.html">Prueba de
                    escritorio con <strong>while</strong> que no se ejecuta</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/7_pres_while_desc_mal.html">Prueba de
                    escritorio con <strong>while</strong> descendente mal
                    diseñado</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/o_while/8_pres_while_asc_mal.html">Prueba de
                    escritorio con <strong>while</strong> ascendente mal
                    diseñado</a>
                </p>
              </li>
              <li><p><a href="/o_while/9_resumen.html">Resumen</a></p></li>
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
                <p><a href="/p_for/1_for.html">for</a></p>
              </li>
              <li>
                <p>
                  <a href="/p_for/2_pres_for.html">Prueba de escritorio con
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
                        <a href="/p_for/3_for_prog/index.html">Programa
                          con <strong>for</strong></a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/p_for/3_for_prog/2_problema.html">Definición
                          del problema</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/p_for/3_for_prog/3_escenarios.html">Escenarios</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/p_for/3_for_prog/4_diseno.html">Diseño</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/p_for/3_for_prog/5_codigo.html">Código</a>
                      </p>
                    </li>
                  </ol>
                </details>
              </li>
              <li><p><a href="/p_for/4_resumen.html">Resumen</a></p></li>
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
                <p><a href="/q_switch/1_switch.html">switch</a></p>
              </li>
              <li>
                <p>
                  <a href="/q_switch/2_pres_switch_c.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un
                    caso</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/q_switch/3_pres_switch_c_v.html">Prueba de
                    escritorio cuando <strong>switch</strong> entra en un caso
                    con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/q_switch/4_pres_switch_c_v2.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en otro caso
                  con varios <strong>case</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/q_switch/5_pres_switch_c_s_b.html">Prueba de
                  escritorio cuando <strong>switch</strong> entra en un caso
                  sin <strong>break</strong></a>
                </p>
              </li>
              <li>
                <p>
                <a href="/q_switch/6_pres_switch_c_n.html">Prueba de
                  escritorio cuando <strong>switch</strong> no cumple ningún
                  caso</a>
              </p>
              </li>
              <li>
                <p>
                  <a href="/q_switch/7_switch_default.html">switch-default</a>
                </p>
              </li>
              <li>
                <p>
                <a href="/q_switch/8_pres_switch_default.html">Prueba de
                  escritorio cuando <strong>switch-default</strong> no cumple
                  ningún caso</a>
                </p>
              </li>
              <li><p><a href="/q_switch/9_resumen.html">Resumen</a></p></li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);