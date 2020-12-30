/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><a href="/index.html">Inicio</a></li>
        <li><a href="/2_sw.html">Software a Instalar</a></li>
        <li><a href="/3_html/">Introducción a HTML5</a></li>
        <li><a href="/4_css/">Introducción a CSS3</a></li>
        <li><a href="/5_js/">Introducción a JavaScript</a></li>
        <li><a href="/6_variables/">Variables</a></li>
        <li><a href="/7_chismes/">Chismes</a></li>
        <li><a href="/8_textos/">Textos</a></li>
        <li><a href="/9_formularios/">Formulario</a></li>
        <li><a href="/10_numeros/">Números</a></li>
        <li><a href="/11_likes/">Likes</a></li>
        <li><a href="/12_formulario_numerico/">Formulario Numérico</a></li>
        <li><a href="/13_mueve/">Mueve Emojis</a></li>
        <li><a href="/14_valida/">Valida Formulario</a></li>
        <li><a href="/15_recomendaciones/">Recomendaciones</a></li>
        <li><a href="/16_switch/">Recomendaciones con Switch</a></li>
        <li><a href="/17_complejas/">Recomendaciones más Complejas</a></li>
        <li><a href="/18_complejas_switch/">Recomendaciones más Complejas con Switch</a></li>
        <li><a href="/19_recta/">Dibuja una Recta</a></li>
        <li><a href="/20_ondulando/">Ondulando</a></li>
        <li><a href="/21_girando/">Girando</a></li>
        <li><a href="/22_valida/">Valida Datos</a></li>
        <li><a href="/13_contadores/">Contadores</a></li>
        <li><a href="/24_acumuladores/">Acumuladores</a></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);