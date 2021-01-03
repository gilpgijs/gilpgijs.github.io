/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Animaciones con Emojis</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_tamanos.html">Tamaños y Distancias en CSS</a></p></li>
        <li><p><a href="4_sprites.html">Sprites</a></p></li>
        <li><p><a href="5_precedencia.html">Precedencia de Operadores</a></p></li>
        <li><p><a href="6_expresiones.html">Expresiones</a></p></li>
        <li><p><a href="7_anima_horizontal.html">Animación Horizontal</a></p></li>
        <li><p><a href="8_anima_recta.html">Animación Recta</a></p></li>
        <li><p><a href="9_ondula.html">Ondula</a></p></li>
        <li><p><a href="10_gira.html">Gira</a></p></li>
        <li><p><a href="11_fondo.html">Fondo y Anclas</a></p></li>
      </ol>`;
  }
});