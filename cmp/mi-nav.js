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
        <li><a href="/9_numeros/">Números</a></li>
        <li><a href="/10_animaciones/">Animaciones con Emojis</a></li>
        <li><a href="/11_mueve_botones/">Mueve Emojis con Botones</a></li>
        <li><a href="/12_choques/">Detecta Choques</a></li>
        <li><a href="/13_sonrie/">Haz Algo cuando Choques</a></li>
        <li><a href="/14_mueve_aleatorio/">Que se Mueva como Quiera</a></li>
        <li><a href="/15_recomendaciones/">Recomendaciones</a></li>
        <li><a href="/16_switch/">Switch</a></li>
        <li><a href="/17_recta/">Dibuja una Recta</a></li>
        <li><a href="/18_girando/">Dibuja Girando</a></li>
        <li><a href="/19_elige_giros/">Elige Cantidad de Giros</a></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);