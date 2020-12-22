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
        <li><p><a href="10_padres.html">Elementos Padres</a></p></li>
        <li><p><a href="11_hijos.html">Elementos Hijos</a></p></li>
        <li><p><a href="12_html.html">El Elemento <strong>html</strong></a></p></li>
        <li><p><a href="13_head.html">El Elemento <strong>head</strong></a></p></li>
        <li><p><a href="14_codificacion.html">Codificación de Caracteres</a></p></li>
        <li><p><a href="15_viewport.html">El Metadato <strong>viewport</strong></a></p></li>
        <li><p><a href="16_title.html">El Elemento <strong>title</strong></a></p></li>
        <li><p><a href="17_body.html">El Elemento <strong>body</strong></a></p></li>
        <li><p><a href="18_fraseo.html">Elementos de Fraseo</a></p></li>
        <li><p><a href="19_h1.html">El Elemento <strong>h1</strong></a></p></li>
        <li><p><a href="20_p.html">El Elemento <strong>p</strong></a></p></li>
        <li><p><a href="21_cierran_p.html">Elementos que Cierran <strong>p</strong></a></p></li>
        <li><p><a href="22_footer.html">El Elemento <strong>footer</strong></a></p></li>
        <li><p><a href="23_referencias.html">Referencias de Caracteres</a></p></li>
        <li><p><a href="24_ejecutar.html">Crear, Ejecutar y Depurar</a></p></li>
      </ol>`;
  }
});