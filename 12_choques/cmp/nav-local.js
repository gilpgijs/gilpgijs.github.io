/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Detecta Choques</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_funciones_parametros.html">Funciones con Parámetros</a></p></li>
        <li><p><a href="4_funciones_parametros_expresiones.html">Funciones con Expresiones en los Parámetros</a></p></li>
        <li><p><a href="5_funciones_return.html">Funciones con Valor de Regreso</a></p></li>
        <li><p><a href="6_op_y.html">Operador Lógico Y</a></p></li>
        <li><p><a href="7_op_o.html">Operador Lógico O</a></p></li>
        <li><p><a href="8_op_no.html">Operador Lógico NO</a></p></li>
        <li><p><a href="9_op_ternario.html">Operador Lógico Ternario</a></p></li>
        <li><p><a href="10_codigo.html">Código</a></p></li>
      </ol>`;
  }
});