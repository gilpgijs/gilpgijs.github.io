/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Variables</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_identificadores.html">Identificadores</a></p></li>
        <li><p><a href="4_variables.html">Variables</a></p></li>
        <li><p><a href="6_constantes.html">Constantes</a></p></li>
        <li><p><a href="7_duplicadas.html">Variables Duplicadas</a></p></li>
        <li><p><a href="8_jsdoc.html">JsDoc</a></p></li>
        <li><p><a href="9_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});