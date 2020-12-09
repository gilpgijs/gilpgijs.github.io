/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Introducción a HTML5</a></p></li>
        <li><p><a href="2_SGML.html">SGML</a></p></li>
        <li><p><a href="3_doctype.html">DOCTYPE</a></p></li>
        <li><p><a href="4_contenido.html">Contenido HTML</a></p></li>
        <li><p><a href="5_comentarios.html">Comentarios</a></p></li>
        <li><p><a href="6_sin_contenido.html">Elementos sin Contenido</a></p></li>
        <li><p><a href="7_con_contenido.html">Elementos con Contenido</a></p></li>
        <li><p><a href="8_estructura.html">Estructura</a></p></li>
        <li><p><a href="9_fraseo.html">Contenido de Fraseo</a></p></li>
        <li><p><a href="10_p.html">El Elemento p</a></p></li>
        <li><p><a href="11_cierran_p.html">Elementos que cierran p</a></p></li>
        <li><p><a href="12_ejemplo_p.html">Ejemplo de p</a></p></li>
        <li><p><a href="13_titulos.html">Títulos</a></p></li>
        <li><p><a href="14_ejemplo_titulos.html">Ejemplo de Títulos</a></p></li>
        <li><p><a href="15_a.html">El elemento a</a></p></li>
        <li><p><a href="16_ejemplo_a.html">Ejemplo de a</a></p></li>
        <li><p><a href="17_footer.html">El elemento footer</a></p></li>
        <li><p><a href="18_ejemplo_footer.html">Ejemplo de footer</a></p></li>
      </ol>`;
  }
});