/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Tipos de Datos</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_ops_txt.html">Operadores de Texto</a></p></li>
        <li><p><a href="4_asignacion.html">Operadores de Asignación</a></p></li>
        <li><p><a href="5_plantillas.html">Plantillas de Texto</a></p></li>
        <li><p><a href="6_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});