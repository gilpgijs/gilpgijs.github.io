/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Tipos de Datos</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_numeros.html">Números</a></p></li>
        <li><p><a href="4_recta.html">Recta Numérica</a></p></li>
        <li><p><a href="5_ops_num.html">Operadores Numéricos</a></p></li>
        <li><p><a href="6_ops_txt.html">Operadores de Texto</a></p></li>
        <li><p><a href="7_identificadores.html">Identificadores</a></p></li>
        <li><p><a href="8_variables.html">Variables</a></p></li>
        <li><p><a href="9_constantes.html">Constantes</a></p></li>
        <li><p><a href="10_duplicadas.html">Variables Duplicadas</a></p></li>
        <li><p><a href="11_asignacion.html">Asignación</a></p></li>
        <li><p><a href="12_incr_y_decr.html">Incremento y Decremento</a></p></li>
        <li><p><a href="13_plantillas.html">Plantillas de Texto</a></p></li>
        <li><p><a href="14_precedencia.html">Precedencia de Operadores</a></p></li>
        <li><p><a href="15_expresiones.html">Expresiones</a></p></li>
      </ol>`;
  }
});