/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ul>
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/0_sw.html">Software a Instalar</a></li>
        <li><a href="/1_html/">Introducción a HTML5</a></li>
        <li><a href="/2_css/">Introducción a CSS3</a></li>
        <li><a href="/3_js/">Introducción a JavaScript</a></li>
        <li><a href="/4_tipos/">Tipos de Datos</a></li>
        <li><a href="/5_formularios/">Formularios</a></li>
        <li><a href="/6_condicionales.html">Condicionales</a></li>
        <li><a href="/7_posicionamiento.html">Posicionamiento CSS3</a></li>
        <li><a href="/8_ciclos.html">Ciclos</a></li>
      </ul>`;
    // marcaActual(this);
  }
}

customElements.define("mi-nav", MiNav);