/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Introducción a CSS3</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_CSS.html">CSS</a></p></li>
        <li><p><a href="4_style.html">El Elemento <strong>style</strong></a></p></li>
        <li><p><a href="5_comentarios.html">Comentarios</a></p></li>
        <li><p><a href="6_reglas.html">Reglas</a></p></li>
        <li><p><a href="7_selectores.html">Selectores</a></p></li>
        <li><p><a href="8_propiedades.html">Propiedades</a></p></li>
        <li><p><a href="9_font.html">Fonts</a></p></li>
        <li><p><a href="10_font-family.html">La Propiedad <strong>font-family</strong></a></p></li>
        <li><p><a href="11_colores.html">Colores en CSS</a></p></li>
        <li><p><a href="12_color.html">La Propiedad <strong>color</strong></a></p></li>
        <li><p><a href="13_background-color.html">La Propiedad <strong>background-color</strong></a></p></li>
        <li><p><a href="14_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
      </ol>`;
  }
});