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
        <li><p><a href="7_booleanos.html">Boleanos</a></p></li>
        <li><p><a href="8_ops_bool.html">Operadoes Lógicos</a></p></li>
        <li><p><a href="9_ops_rel.html">Operadoes Relacionales</a></p></li>
        <li><p><a href="10_identificadores.html">Identificadores</a></p></li>
        <li><p><a href="11_variables.html">Variables</a></p></li>
        <li><p><a href="12_constantes.html">Constantes</a></p></li>
        <li><p><a href="13_duplicadas.html">Variables Duplicadas</a></p></li>
        <li><p><a href="14_asignacion.html">Asignación</a></p></li>
        <li><p><a href="15_incr_y_decr.html">Incremento y Decremento</a></p></li>
        <li><p><a href="16_plantillas.html">Plantillas de Texto</a></p></li>
        <li><p><a href="17_precedencia.html">Precedencia de Operadores</a></p></li>
        <li><p><a href="18_expresiones.html">Expresiones</a></p></li>
        <li><p><a href="19_jsdoc.html">JSDoc</a></p></li>
      </ol>`;
  }
});