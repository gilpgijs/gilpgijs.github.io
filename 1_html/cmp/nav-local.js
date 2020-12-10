/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Introducción a HTML5</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_SGML.html">SGML</a></p></li>
        <li><p><a href="4_comentarios.html">Comentarios</a></p></li>
        <li><p><a href="5_doctype.html">DOCTYPE</a></p></li>
        <li><p><a href="6_elementos.html">Elementos</a></p></li>
        <li><p><a href="7_atributos.html">Atributos</a></p></li>
        <li><p><a href="8_con_contenido.html">Elementos con Contenido</a></p></li>
        <li><p><a href="9_sin_contenido.html">Elementos sin Contenido</a></p></li>
        <li><p><a href="10_html.html">El Elemento <dfn>html</dfn></a></p></li>
        <li><p><a href="11_head.html">El Elemento <dfn>head</dfn></a></p></li>
        <li><p><a href="12_codificacion.html">Codificación de Caracteres</a></p></li>
        <li><p><a href="13_viewport.html">El Viewport</a></p></li>
        <li><p><a href="14_title.html">El Elemento <dfn>title</dfn></a></p></li>
        <li><p><a href="15_body.html">El Elemento <dfn>body</dfn></a></p></li>
        <li><p><a href="16_fraseo.html">Elementos de Fraseo</a></p></li>
        <li><p><a href="17_h1.html">El Elemento <dfn>h1</dfn></a></p></li>
        <li><p><a href="18_p.html">El Elemento <dfn>p</dfn></a></p></li>
        <li><p><a href="19_cierran_p.html">Elementos que Cierran <em>p</em></a></p></li>
        <li><p><a href="20_footer.html">El Elemento <dfn>footer</dfn></a></p></li>
        <li><p><a href="21_entidades.html">Entidades de Caracteres</a></p></li>
      </ol>`;
  }
});