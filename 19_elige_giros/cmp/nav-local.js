/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Elige Cantidad de Giros</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_funciones_funciones.html">Funciones que Invocan Funciones</a></p></li>
        <li><p><a href="4_if.html">if</a></p></li>
        <li><p><a href="5_codigo.html">Código</a></p></li>
      </ol>`;
  }
});