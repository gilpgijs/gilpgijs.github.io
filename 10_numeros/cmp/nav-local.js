/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Tipos de Datos</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_recta.html">Recta Numérica</a></p></li>
        <li><p><a href="4_ops_num.html">Operadores Numéricos</a></p></li>
        <li><p><a href="5_asignacion.html">Asignación</a></p></li>
        <li><p><a href="6_incr_y_decr.html">Incremento y Decremento</a></p></li>
        <li><p><a href="7_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});