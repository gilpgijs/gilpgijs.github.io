/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">La estructura switch</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_switch.html">switch</a></p></li>
        <li><p><a href="5_codigo.html">Recomendaciones con switch</a></p></li>
        <li><p><a href="4_switch_default.html">switch con default</a></p></li>
        <li><p><a href="6_codigo_switch.html">Recomendaciones con switch y default</a></p></li>
      </ol>`;
  }
});