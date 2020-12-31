/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Likes</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_problema.html">Definición del Problema</a></p></li>
        <li><p><a href="4_diseno.html">Diseño</a></p></li>
        <li><p><a href="5_codigo.html">Código</a></p></li>
        <li><p><a href="6_tamanos.html">Tamaños y Distancias</a></p></li>
        <li><p><a href="7_max-height.html">La propiedad <strong>max-height</strong></a></p></li>
        <li><p><a href="8_img.html">El Elemento <strong>img</strong></a></p></li>
        <li><p><a href="9_figure.html">El Elemento <strong>figure</strong></a></p></li>
        <li><p><a href="10_figcaption.html">El Elemento <strong>figcaption</strong></a></p></li>
        <li><p><a href="11_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
        <li><p><a href="12_resumen.html">Resumen</a></p></li>
      </ol>`;
  }
});