/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Introducción a JavaScript</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_js.html">JavaScript</a></p></li>
        <li><p><a href="4_textos.html">Textos</a></p></li>
        <li><p><a href="5_numeros.html">Números</a></p></li>
        <li><p><a href="6_logicos.html">Valores Lógicos</a></p></li>
        <li><p><a href="7_console.html">console.log</a></p></li>
        <li><p><a href="9_comentarios.html">Comentarios</a></p></li>
        <li><p><a href="10_una.html">Comentarios de una Línea</a></p></li>
        <li><p><a href="11_una_o_mas.html">Comentarios de una o más Líneas</a></p></li>
        <li><p><a href="12_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});